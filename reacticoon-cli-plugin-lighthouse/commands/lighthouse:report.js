const LighthouseReportAction = require("../actions/LighthouseReportAction");

const LighthouseReportCommand = api => {
  const data = LighthouseReportAction(api);

  api.openBrowser(data.htmlPath);
};

module.exports = LighthouseReportCommand;
