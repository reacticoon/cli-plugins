const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginGit = createReacticoonPlugin(api => {

  const startWebUICommand = api.createServerCommand(
    "GIT::WEB_UI::START",
    "Retrieve ci build data",
    "./server-commands/start-web-ui",
    {}
  );

  return {
    checkup: [],
    generators: [],
    commands: [],
    serverCommands: [startWebUICommand]
  };
});

module.exports = ReacticoonCliPluginGit;
