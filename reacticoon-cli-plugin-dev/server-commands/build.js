function BuildCommand(req, res, api) {
  const data = api.runReacticoonCommandWithSse(`build`, "BUILD::BUILDING::LOG");
  res.send(data);
}

module.exports = BuildCommand;
