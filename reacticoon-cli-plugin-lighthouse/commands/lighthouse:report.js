const LighthouseReportAction = require("../actions/LighthouseReportAction");

async function LighthouseReportCommand(api) {
  const data = await LighthouseReportAction(api);

  if (!data.error) {
    api.openBrowser(data.htmlPath);
  } else {
    api.error(data.errorMessage, "lightouse");
  }
}

module.exports = LighthouseReportCommand;
