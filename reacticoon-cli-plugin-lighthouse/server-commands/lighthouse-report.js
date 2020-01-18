const LighthouseReportAction = require("../actions/LighthouseReportAction");

function LighthouseReportHtmlCommand(req, res, api) {
  const data = LighthouseReportAction(api);

  api.openBrowser(data.htmlPath);

  res.send(data);
}

module.exports = LighthouseReportHtmlCommand;
