const GetDependencyDetail = require("../actions/GetDependencyDetail");

function DependencyDetailCommand(req, res, api) {
  const { dependencyName } = req.body.payload;
  res.send(GetDependencyDetail(api, dependencyName));
}

module.exports = DependencyDetailCommand;
