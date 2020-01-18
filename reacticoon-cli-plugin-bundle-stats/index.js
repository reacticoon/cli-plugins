const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginBundleStats = createReacticoonPlugin(api => {
  const runBundleStatsReportCommand = api.createServerCommand(
    "BUNDLE_STATS::REPORT",
    "Generate bundle stats report",
    "./server-commands/bundlestats-report",
    {}
  );

  return {
    checkup: [],
    generators: [],
    commands: [
      {
        name: "bundlestats:report",
        path: "./commands/"
      }
    ],
    serverCommands: [runBundleStatsReportCommand],
    overrides: "./overrides"
  };
});

module.exports = ReacticoonCliPluginBundleStats;
