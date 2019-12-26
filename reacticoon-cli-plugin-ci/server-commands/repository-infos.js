var Travis = require("travis-ci");
var travis = new Travis({
  version: "2.0.0"
});

function CommandTravisInfo(req, res) {
  travis.repos("reacticoon", "reacticoon").get(function(err, ciResponse) {
    res.json(ciResponse);
  });
}

module.exports = CommandTravisInfo;
