const GetDependenciesInstalledList = require("../actions/GetDependenciesInstalledList");

function DependenciesInstalledListCommand(req, res, api) {
  res.send(GetDependenciesInstalledList(api));
}

module.exports = DependenciesInstalledListCommand;
