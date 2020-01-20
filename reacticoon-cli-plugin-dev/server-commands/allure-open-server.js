// https://github.com/allure-framework/allure-npm
// const allure = require("allure-commandline");

let _port = null;

function AllureOpenServerCommand(req, res, api) {
  let alreadyRunning = true;

  if (!_port) {
    alreadyRunning = false;
    _port = api.getNetworkNextAvailablePort();

    //https://docs.qameta.io/allure/#_commandline
    api.runCommand(
      `${
        api.getPaths().createReacticoonAppNodeModules
      }/.bin/allure serve -p ${_port}`
    );
  }

  // returns ChildProcess instance
  // const generation = allure(["generate", "allure-results"]);

  // generation.on("exit", function(exitCode) {
  //   console.log("Generation is finished with code:", exitCode);
  // });
  const ip = api.getNetworkAddress();

  const localAddress = `http://localhost:${_port}/index.html`;
  const networkAddress = `http://${ip}:${_port}/index.html`;

  res.send({
    localAddress,
    networkAddress,
    alreadyRunning
  });
}

module.exports = AllureOpenServerCommand;
