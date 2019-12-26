var Travis = require("travis-ci");
var travis = new Travis({
  version: "2.0.0"
});

function CommandTravisBuildInfo(req, res) {
  // https://github.com/pwmckenna/node-travis-ci
  const { buildId, ownerName, repoName } = req.body.payload;
  travis
    // .repos(ownerName, repoName)
    .builds(buildId)
    .get(function(err, ciResponse) {
      ciResponse.build.buildUrl = `https://travis-ci.org/${ownerName}/${repoName}/builds/${buildId}`;
      res.json(ciResponse);
    });
}

module.exports = CommandTravisBuildInfo;
