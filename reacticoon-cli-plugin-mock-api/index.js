const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginMockApi = createReacticoonPlugin(api => ({
  checkup: [require.resolve("./checks/checkMockupDirectoryExists")],
  generators: [],
  commands: [
    api.createCommand({
      name: "mockapi:list-files",
      description: "List he mocked api files",
      path: "./commands/"
    })
  ],
  serverCommands: [
    api.createServerCommand(
      "MOCKAPI::LIST_FILES",
      "List mock api files",
      "./server-commands/ListMockApiFilesServerCommand"
    )
  ]
}));

module.exports = ReacticoonCliPluginMockApi;
