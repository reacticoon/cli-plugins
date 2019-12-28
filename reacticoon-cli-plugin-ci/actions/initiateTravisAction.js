function initiateTravisAction(api) {
  const travisDefaultConfig = {
    language: "node_js",
    node_js: ["stable"],
    cache: { directories: ["node_modules"] },
    script: ["yarn test"]
  };

  api.writeProjectFile(".travis.yml", api.toYaml(travisDefaultConfig));
}

module.exports = initiateTravisAction;
