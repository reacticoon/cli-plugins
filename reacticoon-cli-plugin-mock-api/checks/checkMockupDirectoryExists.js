
const run = ({ check, warn, getProjectFilepath, directoryExists }) => {
  const path = getProjectFilepath('test/api-mocks')
  warn(
    `${directoryExists(path)} api mockup directory exists`,
    `api mockup directory does not exists ${path}`
  )
}

module.exports = {
  name: 'Check api mockup directory',
  description: 'Check that the api mockup directory exists',
  run,
}
