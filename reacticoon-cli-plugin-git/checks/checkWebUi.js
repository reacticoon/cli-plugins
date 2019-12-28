
const run = (api) => {
  api.warnMissingOption("webui.command");
  api.warnMissingOption("webui.url");
}

module.exports = {
  name: 'web ui',
  description: 'Check that a web ui is configured',
  run,
}
