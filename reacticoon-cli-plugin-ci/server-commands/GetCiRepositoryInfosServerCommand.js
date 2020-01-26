var Travis = require("travis-ci");
var travis = new Travis({
  version: "2.0.0"
});

function GetCiRepositoryInfosServerCommand(req, res) {
  const { ownerName, repoName } = req.body.payload;

  travis.repos(ownerName, repoName).get(function(err, ciResponse) {
    const buildSvg = `https://api.travis-ci.org/${ownerName}/${repoName}.svg`;
    res.json({ ownerName, repoName, buildSvg, ...ciResponse });
  });
}

module.exports = GetCiRepositoryInfosServerCommand;
