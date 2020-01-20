const createReacticoonPlugin = require("create-reacticoon-app/plugin/createReacticoonPlugin");

const ReacticoonCliPluginDev = createReacticoonPlugin(api => {
  const LaunchEditorServerCommand = api.createServerCommand(
    "DEV_TOOLS::LAUNCH_EDITOR",
    "Launch code on code editor",
    "./server-commands/launch-editor",
    {}
  );

  const BuildInfoServerCommand = api.createServerCommand(
    "BUILD::INFO",
    "Retrieve info about the last build",
    "./server-commands/build-info",
    {}
  );

  const BuildedServerServerCommand = api.createServerCommand(
    "BUILD::SERVER",
    "Start a local server running",
    "./server-commands/start-build-server",
    {}
  );

  const BuildServerCommand = api.createServerCommand(
    "BUILD::BUILD",
    "Build the application",
    "./server-commands/build",
    {}
  );

  const RunUnitTestsCommand = api.createServerCommand(
    "TESTS::UNIT::RUN",
    "Run unit tests",
    "./server-commands/run-unit-tests",
    {}
  );

  const RunIntegrationTestsCommand = api.createServerCommand(
    "TESTS::INTEGRATION::RUN",
    "Run integration tests",
    "./server-commands/run-integration-tests",
    {}
  );

  const RunTestCoverageCommand = api.createServerCommand(
    "TESTS::COVERAGE::RUN",
    "Run tests coverage",
    "./server-commands/run-integration-tests",
    {}
  );

  const AllureOpenServerCommand = api.createServerCommand(
    "TESTS::ALLURE::SERVER",
    "Run tests coverage",
    "./server-commands/allure-open-server",
    {}
  );

  return {
    checkup: ["./checks/checkReacticoonRouting"],
    generators: [],
    commands: [
      {
        name: "devtools:server",
        path: "./commands/"
      },
      {
        name: "build:info",
        path: "./commands/"
      },
      {
        name: "build:server",
        path: "./commands/"
      }
    ],
    serverCommands: [
      LaunchEditorServerCommand,
      BuildInfoServerCommand,
      BuildedServerServerCommand,
      BuildServerCommand,
      RunUnitTestsCommand,
      RunIntegrationTestsCommand,
      RunTestCoverageCommand,
      AllureOpenServerCommand
    ],
    overrides: "./overrides"
  };
});

module.exports = ReacticoonCliPluginDev;
