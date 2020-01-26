const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginLighthouse = createReacticoonPlugin(api => ({
  checkup: [],
  generators: [],
  commands: [
    api.createCommand({
      name: "lighthouse:report",
      description: "Generate a lighthouse report for the builded website",
      path: "./commands/"
    })
  ],
  serverCommands: [
    api.createServerCommand(
      "LIGHTHOUSE::REPORT",
      "Generate html lighthouse report",
      "./server-commands/RunLighthouseReportServerCommand",
      {}
    )
  ]
}));

module.exports = ReacticoonCliPluginLighthouse;
