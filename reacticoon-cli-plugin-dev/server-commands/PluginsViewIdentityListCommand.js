const GetPluginIdentity = require("../actions/GetPluginIdentity");

function PluginsViewIdentityListCommand(req, res, api) {
  const pluginsNames = req.body.payload.pluginsNames;
  const pluginsIdentityList = pluginsNames.map(pluginName =>
    GetPluginIdentity(pluginName, api)
  );

  res.send(pluginsIdentityList);
}

module.exports = PluginsViewIdentityListCommand;
