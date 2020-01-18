const BuildInfosAction = require("../actions/BuildInfosAction");

module.exports = api => {
  const data = BuildInfosAction(api);

  console.json(data);
};
