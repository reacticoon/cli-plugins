const getDependencyData = require("../utils/getDependencyData");

function GetPluginIdentity(pluginName, api) {
  const isReacticoonCliPlugin = pluginName.startsWith("reacticoon-cli-plugin-");

  let pluginPath;

  if (isReacticoonCliPlugin) {
    pluginPath = api.getPaths().getCliPluginDirectory(pluginName);
  } else {
    pluginPath = api.getPaths().getViewPluginDirectory(pluginName);
  }

  const logoPath = `${pluginPath}/logo.svg`;
  const hasLogo = api.fileExists(logoPath);

  const dependencyData = getDependencyData(api, null, pluginName, pluginPath);

  const pluginIdentity = {
    ...dependencyData,

    pluginPath,

    //
    //
    //
    isOfficial: true, // TODO:
    isInstalled: true, // TODO:

    //
    //
    //
    hasLogo,
    logoPath: hasLogo ? logoPath : null,
    logo: hasLogo ? api.readFile(logoPath) : null
  };

  return pluginIdentity;
}

module.exports = GetPluginIdentity;
