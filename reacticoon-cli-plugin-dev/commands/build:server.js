const StartBuildServerAction = require("../actions/StartBuildServerAction");

module.exports = async api => {
  const data = await StartBuildServerAction(api);

  console.json(data);
};
