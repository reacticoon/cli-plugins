const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginCi = createReacticoonPlugin(api => ({
  checkup: ["./checks/checkHasCi.js"],
  generators: [],
  commands: [],
  serverCommands: [
    api.createServerCommand(
      "CI::PROJECT::STATE",
      "Retrieve project CI state",
      "./server-commands/CurrentProjectStateServerCommand"
    ),

    api.createServerCommand(
      "CI::PROJECT::INITIATE",
      "Initiate continuous integration for the project",
      "./server-commands/InitiateProjectCiServerCommand"
    ),

    api.createServerCommand(
      "CI::REPOSITORY::INFOS",
      "Retrieve ci respository data",
      "./server-commands/GetCiRepositoryInfosServerCommand"
    ),

    api.createServerCommand(
      "CI::BUILD::INFOS",
      "Retrieve ci build data",
      "./server-commands/GetCiBuildInfosCommand"
    )
  ]
}));

module.exports = ReacticoonCliPluginCi;
