const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginCi = createReacticoonPlugin(api => {
  const getCurrentProjectStateCommand = api.createServerCommand(
    "CI::PROJECT::STATE",
    "Retrieve project CI state",
    "./server-commands/current-project-state",
    {}
  );

  const initiateProjectCiCommand = api.createServerCommand(
    "CI::PROJECT::INITIATE",
    "Initiate continuous integration for the project",
    "./server-commands/ininitate-project-ci",
    {}
  );

  const getCiRepositoryInfosCommand = api.createServerCommand(
    "CI::REPOSITORY::INFOS",
    "Retrieve ci respository data",
    "./server-commands/repository-infos",
    {}
  );

  const getCiBuildInfosCommand = api.createServerCommand(
    "CI::BUILD::INFOS",
    "Retrieve ci build data",
    "./server-commands/build-infos",
    {}
  );

  return {
    checkup: [],
    generators: [],
    commands: [],
    serverCommands: [
      getCurrentProjectStateCommand,
      initiateProjectCiCommand,
      getCiRepositoryInfosCommand,
      getCiBuildInfosCommand
    ]
  };
});

module.exports = ReacticoonCliPluginCi;
