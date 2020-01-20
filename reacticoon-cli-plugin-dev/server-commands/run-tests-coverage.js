function RunTestCoverageCommand(req, res, api) {
  const data = api.runReacticoonCommandWithSse(
    `test --coverage`,
    "TESTING::COVERAGE::LOG"
  );
  res.send(data);
}

module.exports = RunTestCoverageCommand;
