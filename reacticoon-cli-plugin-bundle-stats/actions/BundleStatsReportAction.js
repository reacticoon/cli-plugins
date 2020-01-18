function BundleStatsReportAction(api) {
  const htmlPath = `${api.getPaths().projectBuild}/bundle-stats.html`;
  const jsonPath = `${api.getPaths().projectBuild}/bundle-stats.json`;

  return {
    htmlPath,
    jsonPath,
    htmlContent: api.readFile(htmlPath),
    jsonContent: api.readJsonFile(jsonPath)
  };
}

module.exports = BundleStatsReportAction;
