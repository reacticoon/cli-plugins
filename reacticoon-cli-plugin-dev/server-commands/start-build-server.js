const StartBuildServerAction = require("../actions/StartBuildServerAction");

async function StartBuildServer(req, res, api) {
  try {
    const result = await StartBuildServerAction(api);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(400).send({
      error: true
    });
  }
}

module.exports = StartBuildServer;
