const BundleStatsReportAction = require("../actions/BundleStatsReportAction");

function BundleStatsReportServerCommand(req, res, api) {
  const data = BundleStatsReportAction(api);

  api.openBrowser(data.htmlPath);

  res.send(data);
}

module.exports = BundleStatsReportServerCommand;
