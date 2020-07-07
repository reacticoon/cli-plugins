module.exports = isDev => ({
  options: {
    env: {
      BUNDLE_STATS: isDev ? "DEV_MODE" : "PROD_MODE"
    }
  },
  rewire: function rewireBundleStats(api, config, options, env) {
    const { BundleStatsWebpackPlugin } = require("bundle-stats");

    const opts = {
      html: true,
      json: true
    };

    api.injectWebpackPlugin(new BundleStatsWebpackPlugin(opts), config);
  }
});
