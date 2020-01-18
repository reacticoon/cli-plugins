const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginDev = createReacticoonPlugin(api => {
  const LaunchEditorServerCommand = api.createServerCommand(
    "DEV_TOOLS::LAUNCH_EDITOR",
    "Launch code on code editor",
    "./server-commands/launch-editor",
    {}
  );

  const BuildInfoServerCommand = api.createServerCommand(
    "BUILD::INFO",
    "Retrieve info about the last build",
    "./server-commands/build-info",
    {}
  );

  return {
    checkup: ["./checks/checkReacticoonRouting"],
    generators: [],
    commands: [
      {
        name: "devtools:server",
        path: "./commands/"
      },
      {
        name: "build:info",
        path: "./commands/"
      }
    ],
    serverCommands: [LaunchEditorServerCommand, BuildInfoServerCommand],
    overrides: "./overrides"
  };
});

module.exports = ReacticoonCliPluginDev;
