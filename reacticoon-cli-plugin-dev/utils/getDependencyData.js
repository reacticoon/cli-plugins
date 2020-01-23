const path = require("path");
const isEmpty = require("lodash/isEmpty");
const get = require("lodash/get");
const { camelizeKeys } = require("humps");

function getDependencyData(api, appVersion, name, dependencyPathParam) {
  const dependencyPath =
    dependencyPathParam ||
    path.resolve(`${api.getPaths().appNodeModules}/${name}`);

  const packageJsonFile = `${dependencyPath}/package.json`;

  console.log({ packageJsonFile, dependencyPath });

  let dependencyPackageJson;

  let isInstalled = false;
  if (api.fileExists(packageJsonFile)) {
    dependencyPackageJson = api.readJsonFile(packageJsonFile);
    isInstalled = true;
  } else {
    dependencyPackageJson = null;
    isInstalled = false;
  }

  const readmePath = `${dependencyPath}/README.md`;
  const hasReadme = api.fileExists(readmePath);

  const currentVersion = appVersion || get(dependencyPackageJson, "version");

  // TODO: remove
  // /!\ avoid trying to npm view reacticoon packages that does not exists yet
  let shouldNpmView = !name.startsWith("reacticoon");
  let npmViewResult = null;

  if (shouldNpmView) {
    try {
      npmViewResult = api.execSimpleSync(`npm view ${name} --json`);
      if (npmViewResult && !npmViewResult.startsWith("{")) {
        npmViewResult = null;
      }
    } catch (e) {
      npmViewResult = null;
    }
  }

  const npmView = npmViewResult
    ? camelizeKeys(JSON.parse(npmViewResult, null, 2))
    : {};

  const homepage = get(
    npmView,
    "homepage",
    get(dependencyPackageJson, "homepage")
  );

  return {
    name,

    npmView,

    description: get(
      npmView,
      "description",
      get(dependencyPackageJson, "description")
    ),
    version: {
      current: currentVersion,
      packageVersion: get(dependencyPackageJson, "version", null),
      range: "", // TODO:
      latest: get(npmView, "distTags.latest"),
      hasBeta: !isEmpty(get(npmView, "distTags.beta")),
      beta: get(npmView, "distTags.beta"), // TODO: find data
      isUpToDate: get(npmView, "distTags.latest") === currentVersion,
      wantedVersion: "" // TODO: calculate data
    },

    isInstalled,

    isOfficial: false, // TODO:

    //
    // "homepage": "https://github.com/reacticoon/reacticoon-plugins/reacticoon-plugin-ci#readme"
    //
    hasHomepage: !isEmpty(homepage),
    homepage,

    // e.g:
    // repository: {
    //   type: "git",
    //   url: "git+https://github.com/reacticoon/reacticoon-plugins/reacticoon-plugin-ci.git"
    // },
    repository: get(
      npmView,
      "repository",
      get(dependencyPackageJson, "repository")
    ),

    //
    //

    author: get(npmView, "author", get(dependencyPackageJson, "author")),
    description: get(
      npmView,
      "description",
      get(dependencyPackageJson, "description")
    ),
    keywords: get(npmView, "keywords", get(dependencyPackageJson, "keywords")),

    isReacticoonPlugin: name.startsWith("reacticoon-plugin-"),
    isReacticoonCliPlugin: name.startsWith("reacticoon-cli-plugin-"),

    //
    //
    //
    dependencyPath,

    //
    //
    //
    readmePath,
    hasReadme,

    //
    // TODO: add to thanks pages + donation goal
    // https://avatars.dicebear.com/
    //
    logoUrl: `https://avatars.dicebear.com/v2/identicon/${name}.svg`
  };
}

module.exports = getDependencyData;
