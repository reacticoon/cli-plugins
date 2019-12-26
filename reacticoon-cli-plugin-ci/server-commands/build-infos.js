var Travis = require("travis-ci");
var travis = new Travis({
  version: "2.0.0"
});

function CommandTravisBuildInfo(req, res) {
  // https://github.com/pwmckenna/node-travis-ci
  const { buildId } = req.body.payload;
  travis
    // .repos(ownerName, repoName)
    .builds(buildId)
    .get(function(err, ciResponse) {
      res.json(ciResponse);
    });
}

module.exports = CommandTravisBuildInfo;
