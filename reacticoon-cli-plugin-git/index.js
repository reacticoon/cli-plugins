const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginGit = createReacticoonPlugin(api => ({
  checkup: ["./checks/checkGit", "./checks/checkWebUi"],
  generators: [],
  commands: [
    api.createCommand({
      name: "devtools:git-info",
      description: "Retrieve git data",
      path: "./commands/"
    })
  ],
  serverCommands: [
    api.createServerCommand(
      "GIT::GIT_INFO",
      "Retrieve app git information",
      "./server-commands/GetGitInformationServerCommand"
    ),

    api.createServerCommand(
      "GIT::WEB_UI::START",
      "Retrieve ci build data",
      "./server-commands/StartWebUIServerCommand"
    )
  ]
}));

module.exports = ReacticoonCliPluginGit;
