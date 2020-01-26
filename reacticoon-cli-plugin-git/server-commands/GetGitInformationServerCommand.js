const getGitInfo = require("../actions/getGitInfo");

function GetGitInformationServerCommand(req, res) {
  res.json(getGitInfo());
}

module.exports = GetGitInformationServerCommand;
