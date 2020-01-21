function GetPluginIdentity(pluginName, api) {
  const pluginPath = api.getPaths().getViewPluginDirectory(pluginName);

  let logoPath = `${pluginPath}/logo.svg`;
  let hasLogo = api.fileExists(logoPath);

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
    homepage: pluginPackageJson.homepage,
    // e.g:
    // repository: {
    //   type: "git",
    //   url: "git+https://github.com/reacticoon/reacticoon-plugins/reacticoon-plugin-ci.git"
    // },
    repository: pluginPackageJson.repository,

    isOfficial: true, // TODO:

    isInstalled: true, // TODO:

    //
    //
    //
    hasLogo,
    logoPath: hasLogo ? logoPath : null
  };

  return pluginIdentity;
}

module.exports = GetPluginIdentity;
