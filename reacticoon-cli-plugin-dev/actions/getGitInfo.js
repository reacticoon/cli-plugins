const trim = require("lodash/trim");
const { execSimpleSync } = require("create-reacticoon-app/cli-utils/cmd");
const { isGitInit } = require("create-reacticoon-app/cli-utils/git");
const git = require("create-reacticoon-app/cli-utils/git");

function getGitInfo() {
  const isGitInitied = isGitInit();

  let gitInfo = {
    isGitInit: isGitInitied
  };

  if (isGitInitied) {
    try {
      const res = execSimpleSync("git log --name-status HEAD^..HEAD");
      const logExploded = res.split("\n");

      gitInfo = {
        ...gitInfo,
        lastCommit: {
          author: trim(logExploded[1].substr("Author: ".length)),
          date: trim(logExploded[2].substr("Date: ".length)),
          commitId: trim(logExploded[0].substr("commit ".length)),
          message: trim(logExploded[4])
        }
      };
    } catch {
      return {};
    }

    try {
      gitInfo.currentBranch = git.currentProjectBranch();
    } catch (e) {
      gitInfo.currentBranch = null;
    }

    try {
      gitInfo.fullName = git.currentProjectFullName();
    } catch {
      gitInfo.fullName = null;
    }

    try {
      gitInfo.projectName = git.currentProjectName();
    } catch {
      gitInfo.projectName = null;
    }

    try {
      gitInfo.organization = git.currentOrganization();
    } catch (e) {
      gitInfo.organization = null;
    }
  }
  return gitInfo;
}

module.exports = getGitInfo;
