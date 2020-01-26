const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginTest = createReacticoonPlugin(api => ({
  overrides: "./overrides",
  checkup: ["./checkup/testCheckup"],
  commands: [
    api.createCommand({
      name: "test-cmd",
      description: "test command",
      path: "./commands/test"
    })
  ],
  generators: [
    api.createGenerator({
      name: "Root",
      description: "Generate test module",
      path: "./generators/rootGenerator.js"
    })
  ]
}));

module.exports = ReacticoonCliPluginTest;
