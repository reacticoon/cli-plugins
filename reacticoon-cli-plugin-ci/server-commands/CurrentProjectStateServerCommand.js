const getCurrentProjectState = require("../actions/getCurrentProjectState");

function CurrentProjectStateServerCommand(req, res, pluginApi) {
  const state = getCurrentProjectState(pluginApi);
  res.json(state);
}

module.exports = CurrentProjectStateServerCommand;
