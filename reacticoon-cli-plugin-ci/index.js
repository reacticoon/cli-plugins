const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");
const createServerCommand = require("create-reacticoon-app/server/createServerCommand");

const getCurrentProjectStateCommand = createServerCommand(
  "CI::PROJECT::STATE",
  "Retrieve project CI state",
  "./server-commands/current-project-state",
  {}
);

const initiateProjectCiCommand = createServerCommand(
  "CI::PROJECT::INITIATE",
  "Initiate continuous integration for the project",
  "./server-commands/ininitate-project-ci",
  {}
);


const getCiRepositoryInfosCommand = createServerCommand(
  "CI::REPOSITORY::INFOS",
  "Retrieve ci respository data",
  "./server-commands/repository-infos",
  {}
);

const getCiBuildInfosCommand = createServerCommand(
  "CI::BUILD::INFOS",
  "Retrieve ci build data",
  "./server-commands/build-infos",
  {}
);

module.exports = createReacticoonPlugin({
  checkup: [],
  generators: [],
  commands: [],
  serverCommands: [
    getCurrentProjectStateCommand,
    initiateProjectCiCommand,
    getCiRepositoryInfosCommand,
    getCiBuildInfosCommand
  ]
});
