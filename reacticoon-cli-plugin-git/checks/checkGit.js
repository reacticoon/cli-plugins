const getGitInfo = require("../actions/getGitInfo")

const run = (api) => {
  const gitInfo = getGitInfo()
  api.error(
    !gitInfo.isGitInitied,
    `Git is initialized`,
    "Run `git init` command in your project root directory"
  );
}

module.exports = {
  name: 'Git',
  description: 'Check that git is correctly setup',
  run,
}
