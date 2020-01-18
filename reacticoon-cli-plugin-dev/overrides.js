const { info } = require("create-reacticoon-app/cli-utils");
const extractDataFromWebpackStats = require("./utils/extractDataFromWebpackStats");
const merge = require("lodash/merge");

const getOnEmit = (api, options) => async (compilation, callback) => {
  const data = extractDataFromWebpackStats(compilation.getStats().toJson({}));

  // Webpack builtAt is not available yet
  if (!data.builtAt) {
    data.builtAt = Date.now();
  }

  // const outputPath = get(compilation, "options.output.path");

  try {
    const fs = require("fs");

    // TODO: add data:
    // git last commit
    // app version
    // env
    // cf env-vars
    const reacticoonBuildInfo = {
      builtAt: data.builtAt
    };

    info(`Create reacticoon-build-info.json`, "build");
    fs.writeFileSync(
      api.getPaths().projectBuildInfoFile,
      JSON.stringify(reacticoonBuildInfo, null, 2)
    );

    callback();
  } catch (err) {
    callback(err);
  }
};

const DEFAULT_OPTIONS = {};

class ReacticoonBuildWebpackPlugin {
  constructor(api, options) {
    this.api = api;
    this.options = options;
  }

  apply(compiler) {
    const options = merge({}, DEFAULT_OPTIONS, this.options);

    compiler.hooks.emit.tapAsync(
      "ReacticoonBuild",
      getOnEmit(this.api, options)
    );
  }
}

module.exports = {
  options: {},
  rewire: function rewirePluginDev(config, env, api) {
    api.injectWebpackPlugin(new ReacticoonBuildWebpackPlugin(api), config);
  }
};
