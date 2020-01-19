function BuildInfosAction(api) {
  return {
    hasBuild: api.hasBuild(),
    buildInfo: api.getBuildInfo()
  };
}

module.exports = BuildInfosAction;
