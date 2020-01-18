const { getRoutes } = require("create-reacticoon-app/front");

const run = api => {
  const routes = getRoutes();

  if (!routes) {
    api.error(
      true,
      `routes are not accessible``Does the sse server correctly running ?`
    );
    return;
  }

  const names = {};
  const path = {};
  routes.forEach(route => {
    if (names[route.definition.name] === true) {
      api.error(
        false,
        `RouteDefinition name '${route.definition.name}' is duplicated`,
        `RouteDefinition name '${route.definition.name} is duplicated`
      );
    }
    if (path[route.definition.path] === true) {
      api.error(
        false,
        `RouteDefinition path '${route.definition.path}' is duplicated`,
        `RouteDefinition path '${route.definition.path}' is duplicated`
      );
    }
    names[route.definition.name] = true;
    path[route.definition.path] = true;
  });
};

module.exports = {
  name: "Routing",
  description: "Check that the project routing is correct",
  run
};
