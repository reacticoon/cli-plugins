const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginGit = createReacticoonPlugin(api => {
  const getGitInformationServerCommand = api.createServerCommand(
    'GIT::GIT_INFO',
    'Retrieve app git information',
    './server-commands/git-info',
    {}
  )
  
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
    serverCommands: [getGitInformationServerCommand, startWebUICommand]
  };
});

module.exports = ReacticoonCliPluginGit;