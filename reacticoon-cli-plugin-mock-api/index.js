const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginMockApi = createReacticoonPlugin(api => {
  const listMockApiFilesServerCommand = api.createServerCommand(
    "MOCKAPI::LIST_FILES",
    "List mock api files",
    "./server-commands/list-files",
    {}
  );

  return {
    checkup: [require.resolve("./checks/checkMockupDirectoryExists")],
    generators: [],
    commands: [
      {
        name: "mockapi:list-files",
        path: "./commands/"
      }
    ],
    serverCommands: [listMockApiFilesServerCommand]
  };
});

module.exports = ReacticoonCliPluginMockApi;
