const GetPluginIdentity = require("../actions/GetPluginIdentity");
const path = require("path");

function PluginsViewIdentityListCommand(req, res, api) {
  const pluginsNames = (api.loadConfiguration().plugins || []).map(pluginData =>
    path.basename(pluginData.resolve)
  );

  const pluginsIdentityList = pluginsNames.map(pluginName =>
    GetPluginIdentity(pluginName, api)
  );

  res.send(pluginsIdentityList);
}

module.exports = PluginsViewIdentityListCommand;
