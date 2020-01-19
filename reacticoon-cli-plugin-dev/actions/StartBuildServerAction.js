// https://github.com/zeit/serve#readme
const handler = require("serve-handler");
const http = require("http");
const { getNetworkAddress } = require("create-reacticoon-app/utils/Network");
const { execSync } = require("create-reacticoon-app/cli-utils");

async function StartBuildServerAction(
  api,
  options = {
    sslCert: null,
    sslKey: null
  }
) {
  if (!api.hasBuild()) {
    throw new Error("No build found");
  }

  api.info("Starting local server for build", "build");

  // TODO: handle if already running.

  const httpMode = options["sslCert"] && args["sslKey"] ? "https" : "http";

  // const command = `${api.getPaths().resolveCreateReacticoonApp()}/.bin/serve`;

  const port = 5000;

  async function runServer() {
    return new Promise((resolve, reject) => {
      let alreadyRunning = false;
      try {
        const cmdAlreadyRunning = `lsof -ti:${port}`;
        const res = execSync(cmdAlreadyRunning);

        if (res.length > 0) {
          alreadyRunning = true;
        }
      } catch (e) {
        alreadyRunning = false;
      }

      // const argv = command.split(" ");
      // api.spawn(argv[0], argv.slice(1));
      // api.info("Spawning git webui");
      const server = http.createServer(async (request, response) => {
        // You pass two more arguments for config and middleware
        // More details here: https://github.com/zeit/serve-handler#options
        const result = await handler(request, response, {
          // Set a sub directory to be served
          // By default, the current working directory will be served. If you only want to serve a specific
          // path, you can use this options to pass an absolute path or a custom directory to be served
          // relative to the current working directory.
          public: api.getPaths().projectBuild
        });

        return result;
      });

      // see https://github.com/zeit/serve/blob/master/bin/serve.js
      let localAddress = null;
      let networkAddress = null;

      const ip = getNetworkAddress();

      const details = server.address();
      // TODO: if already running, we do not have acces to details
      const address = !details
        ? "localhost"
        : details.address === "::"
        ? "localhost"
        : details.address;
      localAddress = `${httpMode}://${address}:${port}`;

      networkAddress = `${httpMode}://${ip}:${port}`;

      if (!alreadyRunning) {
        server.listen(port, error => {
          if (error) {
            resolve({
              error: true
            });
            return;
          }

          api.info(`Running at http://localhost:${port}`, "build");

          resolve({
            alreadyRunning,
            localAddress,
            networkAddress
          });
        });
      } else {
        resolve({
          alreadyRunning,
          localAddress,
          networkAddress
        });
      }
    });
  }

  return await runServer();
}

module.exports = StartBuildServerAction;
