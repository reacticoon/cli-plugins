const StartBuildServerAction = require("../actions/StartBuildServerAction");

module.exports = async function(api) {
  const data = await StartBuildServerAction(api);

  console.json(data);
};
