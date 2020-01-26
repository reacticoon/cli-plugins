function RunUnitTestsCommand(req, res, api) {
  const data = api.runReacticoonCommandWithSse(
    `test`,
    "TESTS::UNIT::RUNNING::LOG"
  );
  res.send({
    ...data,
    junitUnitTestsReport: api.getPaths().junitUnitTestsReport
  });
}

module.exports = RunUnitTestsCommand;
