const getCurrentProjectState = require('../actions/getCurrentProjectState')

function CommandCurrentProjectState(req, res, pluginApi) {
  const state = getCurrentProjectState(pluginApi);
  res.json(state);
}

module.exports = CommandCurrentProjectState;
