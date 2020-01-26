const BuildInfosAction = require("../actions/BuildInfosAction");

function BuildInfoCommand(req, res, api) {
  const data = BuildInfosAction(api);

  res.send(data);
}

module.exports = BuildInfoCommand;
