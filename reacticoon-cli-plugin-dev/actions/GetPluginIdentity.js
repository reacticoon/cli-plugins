const isEmpty = require("lodash/isEmpty");

function GetPluginIdentity(pluginName, api) {
  const pluginPath = api.getPaths().getViewPluginDirectory(pluginName);

  const readmePath = `${pluginPath}/README.md`;
  const hasReadme = api.fileExists(readmePath);

  let logoPath = `${pluginPath}/logo.svg`;
  const hasLogo = api.fileExists(logoPath);

  // TODO: warn if name / description and package.json#description are not the same?
  const pluginPackageJson = api.readJsonFile(`${pluginPath}/package.json`);
  const pluginIdentity = {
    // "name": "reacticoon-plugin-ci",
    // "version": "0.7.7",
    // "description": "vue-cli plugin to add Apollo and GraphQL"
    name: pluginPackageJson.name,
    version: pluginPackageJson.version,
    latestVersion: pluginPackageJson.version, // TODO: search
    isUpToDate: true, // TODO:
    description: pluginPackageJson.description,
    //
    // "homepage": "https://github.com/reacticoon/reacticoon-plugins/reacticoon-plugin-ci#readme"
    //
    hasHomepage: !isEmpty(pluginPackageJson.homepage),
    homepage: pluginPackageJson.homepage,
    // e.g:
    // repository: {
    //   type: "git",
    //   url: "git+https://github.com/reacticoon/reacticoon-plugins/reacticoon-plugin-ci.git"
    // },
    repository: pluginPackageJson.repository,

    pluginPath,

    //
    //
    //

    isOfficial: true, // TODO:
    isInstalled: true, // TODO:
    hasReadme: true, // TODO:

    //
    //
    //
    hasLogo,
    logoPath: hasLogo ? logoPath : null,
    logo: hasLogo ? api.readFile(logoPath) : null,

    //
    //
    //
    readmePath,
    hasReadme
  };

  return pluginIdentity;
}

module.exports = GetPluginIdentity;
