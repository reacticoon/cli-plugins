const LighthouseReportAction = require("../actions/LighthouseReportAction");

async function RunLighthouseReportServerCommand(req, res, api) {
  const data = await LighthouseReportAction(api);

  if (!data.error) {
    api.openBrowser(data.htmlPath);

    res.send(data);
  } else {
    res.status(400).send(data);
  }
}

module.exports = RunLighthouseReportServerCommand;
