const getDependencyData = require("../utils/getDependencyData");

function GetDependencyDetail(api, name) {
  return getDependencyData(api, null, name);
}

module.exports = GetDependencyDetail;
