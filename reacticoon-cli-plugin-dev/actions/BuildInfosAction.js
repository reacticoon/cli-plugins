function BuildInfosAction(api) {
  const hasBuild = api.directoryExists(api.getPaths().projectBuild);

  let reacticoonBuildInfo;

  if (hasBuild) {
    reacticoonBuildInfo = api.readJsonFile(api.getPaths().projectBuildInfoFile);

    if (reacticoonBuildInfo) {
      reacticoonBuildInfo.builtAtFormatted = new Date(
        reacticoonBuildInfo.builtAt
      ).toISOString();
    }
  }

  return {
    hasBuild,
    buildInfo: reacticoonBuildInfo
  };
}

module.exports = BuildInfosAction;
