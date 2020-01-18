module.exports = isDev => ({
  options: {
    env: {
      BUNDLE_STATS: isDev ? "DEV_MODE" : "PROD_MODE"
    }
  },
  rewire: function rewireBundleStats(config, env, api) {
    const { BundleStatsWebpackPlugin } = require("bundle-stats");

    const options = {
      html: true,
      json: true
    };

    api.injectWebpackPlugin(new BundleStatsWebpackPlugin(options), config);
  }
});
