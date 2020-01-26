async function LighthouseReportHtmlAction(api) {
  const path = `${api.getPluginTmpPath()}/`;

  const reportFilePath = `${path}/${api.generateUUID()}`;
  api.mkdirp(path);

  const result = await api.runOnBuildedServer(api).then(({ localAddress }) => {
    api.execSimpleSync(
      `${api.getPluginPath()}/node_modules/.bin/lighthouse ${localAddress} -GA --output json --output html --output-path=${reportFilePath}`
    );

    const jsonPath = `${reportFilePath}.report.json`;
    const htmlPath = `${reportFilePath}.report.html`;

    return {
      htmlPath,
      jsonPath,
      jsonContent: api.readJsonFile(jsonPath),
      htmlContent: api.readFile(htmlPath)
    };
  });

  return result;
}

module.exports = LighthouseReportHtmlAction;
