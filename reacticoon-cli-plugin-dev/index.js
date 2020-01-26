const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginDev = createReacticoonPlugin(api => ({
  checkup: [
    "./checks/checkReacticoonRouting",
    "./checks/checkReacticoonPlugins",
    "./checks/checkReacticoonConfig",
    "./checks/checkCreateReacticoonApp",
    "./checks/checkReactVersion",
    "./checks/checkReacticoon"
  ],
  generators: [
    api.createGenerator({
      name: "Module generation",
      description: "Generates modules",
      path: "./generators/module/generate-module.js"
    })
  ],
  commands: [
    api.createCommand({
      name: "devtools:server",
      description: "Run dev tools server",
      path: "./commands/"
    }),

    api.createCommand({
      name: "build:info",
      description: "Retrieve data about the last build",
      path: "./commands/"
    }),

    api.createCommand({
      name: "build:server",
      description: "Run a local server for the builded website",
      path: "./commands/"
    })
  ],
  serverCommands: [
    api.createServerCommand(
      "DEV_TOOLS::LAUNCH_EDITOR",
      "Launch code on code editor",
      "./server-commands/LaunchEditorServerCommand"
    ),

    api.createServerCommand(
      "BUILD::INFO",
      "Retrieve info about the last build",
      "./server-commands/BuildInfoServerCommand"
    ),

    api.createServerCommand(
      "BUILD::SERVER",
      "Start a local server running",
      "./server-commands/StartBuildServerServerCommand"
    ),

    api.createServerCommand(
      "BUILD::BUILD",
      "Build the application",
      "./server-commands/BuildServerCommand"
    ),

    api.createServerCommand(
      "TESTS::UNIT::RUN",
      "Run unit tests",
      "./server-commands/RunUnitTestsCommand"
    ),

    api.createServerCommand(
      "TESTS::INTEGRATION::RUN",
      "Run integration tests",
      "./server-commands/RunIntegrationTestsCommand"
    ),

    api.createServerCommand(
      "TESTS::COVERAGE::RUN",
      "Run tests coverage",
      "./server-commands/RunCoverageTestsCommand"
    ),

    api.createServerCommand(
      "TESTS::ALLURE::SERVER",
      "Run tests coverage",
      "TESTS::ALLURE::SERVER",
      "./server-commands/AllureOpenServerCommand"
    ),

    api.createServerCommand(
      "PLUGINS::VIEW::IDENTITY::LIST",
      "Return the identity data for the given pluginsNames",
      "./server-commands/PluginsViewIdentityListCommand"
    ),

    api.createServerCommand(
      "PLUGINS::CLI::IDENTITY::LIST",
      "Return the identity data for the registered cli plugins",
      "./server-commands/PluginsCliIdentityListCommand"
    ),

    api.createServerCommand(
      "PLUGINS::VIEW::IDENTITY",
      "Return the identity data for the given plugin name",
      "./server-commands/PluginsViewIdentityCommand"
    ),

    api.createServerCommand(
      "DEPENDENCIES::INSTALLED::LIST",
      "Return the app dependencies",
      "./server-commands/DependenciesInstalledListCommand"
    ),

    api.createServerCommand(
      "DEPENDENCIES::VIEW::DETAIL",
      "Return the dependency detail",
      "./server-commands/DependencyDetailCommand"
    )
  ],
  overrides: "./overrides"
}));

module.exports = ReacticoonCliPluginDev;
