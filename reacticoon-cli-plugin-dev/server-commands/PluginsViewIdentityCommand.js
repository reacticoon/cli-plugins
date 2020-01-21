const GetPluginIdentity = require("../actions/GetPluginIdentity");

function PluginsViewIdentityCommand(req, res, api) {
  const pluginName = req.body.payload.pluginName;
  res.send(GetPluginIdentity(pluginName, api));
}

module.exports = PluginsViewIdentityCommand;
