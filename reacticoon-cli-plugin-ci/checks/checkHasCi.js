const getCurrentProjectState = require("../actions/getCurrentProjectState")

const run = (api) => {
  const state = getCurrentProjectState(api)

  api.warn(
    !state.hasCi,
    `A continuous integration is defined`,
    // TODO: dynamic port / domain
    `You should configure a continuous integration on http://localhost:4242/_rc/ci`
  );
}

module.exports = {
  name: 'Continuous integration',
  description: 'Check that the project has a continuous integration set up',
  run,
}
