const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginDev = createReacticoonPlugin(api => {
  const LaunchEditorServerCommand = api.createServerCommand(
    "DEV_TOOLS::LAUNCH_EDITOR",
    "Launch code on code editor",
    "./server-commands/launch-editor",
    {}
  );

  return {
    checkup: [
      './checks/checkReacticoonRouting'
    ],
    generators: [],
    commands: [
      {
        name: "devtools:git-info",
        path: "./commands/"
      },
      {
        name: "devtools:server",
        path: "./commands/"
      }
    ],
    serverCommands: [LaunchEditorServerCommand]
  };
});

module.exports = ReacticoonCliPluginDev;
