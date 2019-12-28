function getCurrentProjectState(pluginApi) {
  const hasTravisCi = pluginApi.hasProjectFile(".travis.yml");
  let configuration = null;
  let rawConfiguration = null;

  if (hasTravisCi) {
    rawConfiguration = pluginApi.readProjectFile(".travis.yml");
    configuration = rawConfiguration
      ? pluginApi.parseYaml(rawConfiguration)
      : null;
  }

  state = {
    hasCi: hasTravisCi,
    ciType: hasTravisCi ? "travis" : null,
    configuration,
    rawConfiguration
  };

  return state;
}

module.exports = getCurrentProjectState