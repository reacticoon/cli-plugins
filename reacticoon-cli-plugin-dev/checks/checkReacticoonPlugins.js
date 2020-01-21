const { getPlugins } = require("create-reacticoon-app/front");
const isEmpty = require("lodash/isEmpty");
const GetPluginIdentity = require("../actions/GetPluginIdentity");

const run = api => {
  const plugins = getPlugins();

  if (!plugins) {
    api.error(
      false,
      `plugins are not accessible. Does the sse server correctly running ?`
    );
    return;
  }

  const names = {};
  plugins.forEach(pluginData => {
    const pluginName = pluginData.plugin.name;
    const header = `[${pluginName}] `;

    const identity = GetPluginIdentity(pluginName, api);

    if (names[pluginName] === true) {
      api.error(
        !isEmpty(pluginName),
        `${header} name is not duplicated`,
        `${header} name is duplicated`
      );
    }
    names[pluginName] = true;

    if (pluginName !== identity.name) {
      api.error(
        false,
        `${header} name is valid`,
        `${header} name is invalid: not same name on package.json`
      );
    }

    const uiPluginPrefix = "reacticoon-plugin-";
    if (!pluginName.startsWith(uiPluginPrefix)) {
      api.error(
        false,
        `${header} name is valid`,
        `${header} name is invalid: must starts with '${uiPluginPrefix}' prefix.`
      );
    }

    if (isEmpty(identity.version)) {
      api.error(
        false,
        `${header} version '${identity.version}' exists`,
        `${header} version is missing`
      );
    }
    // TODO: check version format following RFC
  });
};

module.exports = {
  name: "UI plugins",
  description: "Check that the project's UI plugins are correct",
  run
};
