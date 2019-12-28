const createReacticoonPlugin = require('create-reacticoon-app/plugin/createReacticoonPlugin')
const createServerCommand = require('create-reacticoon-app/server/createServerCommand')


const LaunchEditorServerCommand = createServerCommand(
  'DEV_TOOLS::LAUNCH_EDITOR',
  'Launch code on code editor',
  './server-commands/launch-editor',
  {}
)

module.exports = createReacticoonPlugin({
  checkup: [],
  generators: [],
  commands: [
    {
      name: 'devtools:git-info',
      path: './commands/',
    },
    {
      name: 'devtools:server',
      path: './commands/',
    },
  ],
  serverCommands: [LaunchEditorServerCommand],
})
