function LighthouseReportHtmlAction(api) {
  const path = `${api.getPluginTmpPath()}/`;

  const reportFilePath = `${path}/${api.generateUUID()}`;

  api.mkdirp(path);

  // TODO: remove _rc
  api.execSimpleSync(
    `${api.getPluginPath()}/node_modules/.bin/lighthouse ${api.getServerUrl()}/_rc -GA --output json --output html --output-path=${reportFilePath}`
  );

  const jsonPath = `${reportFilePath}.report.json`;
  return {
    htmlPath: `${reportFilePath}.report.html`,
    jsonPath,
    jsonContent: api.readJsonFile(jsonPath)
  };
}

module.exports = LighthouseReportHtmlAction;
