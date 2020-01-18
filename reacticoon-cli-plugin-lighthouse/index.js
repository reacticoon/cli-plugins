const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginLighthouse = createReacticoonPlugin(api => {
  const runLighthouseReportCommand = api.createServerCommand(
    "LIGHTHOUSE::REPORT",
    "Generate html lighthouse report",
    "./server-commands/lighthouse-report",
    {}
  );

  return {
    checkup: [],
    generators: [],
    commands: [
      {
        name: "lighthouse:report",
        path: "./commands/"
      }
    ],
    serverCommands: [runLighthouseReportCommand]
  };
});

module.exports = ReacticoonCliPluginLighthouse;
