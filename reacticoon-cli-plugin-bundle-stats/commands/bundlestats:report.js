const BundleStatsReportAction = require("../actions/BundleStatsReportAction");

const BundleStatsReportCommand = api => {
  const data = BundleStatsReportAction(api);

  api.openBrowser(data.htmlPath);
};

module.exports = BundleStatsReportCommand;
