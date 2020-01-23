const map = require("lodash/map");
const getDependencyData = require("../utils/getDependencyData");

function GetDependenciesInstalledList(api) {
  const packageJson = JSON.parse(api.readProjectFile("package.json"));

  const dependenciesData = {
    main: map(packageJson.dependencies, (version, name) =>
      getDependencyData(api, version, name)
    ),
    dev: map(packageJson.devDependencies, (version, name) =>
      getDependencyData(api, version, name)
    )
  };

  return dependenciesData;
}

module.exports = GetDependenciesInstalledList;
