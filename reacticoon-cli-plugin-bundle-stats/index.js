const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginBundleStats = createReacticoonPlugin(api => ({
  checkup: [],
  generators: [],
  commands: [
    api.createCommand({
      name: "bundlestats:report",
      description: "Generate bundle stats report",
      path: "./commands/"
    })
  ],
  serverCommands: [
    api.createServerCommand(
      "BUNDLE_STATS::REPORT",
      "Generate bundle stats report",
      "./server-commands/BundleStatsReportServerCommand"
    )
  ],
  overrides: "./overrides"
}));

module.exports = ReacticoonCliPluginBundleStats;
