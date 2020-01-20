function RunIntegrationTestsCommand(req, res, api) {
  const data = api.runReacticoonCommandWithSse(
    `test:integration`,
    "TESTS::INTEGRATION::RUNNING::LOG"
  );
  res.send({
    ...data,
    junitIntegrationTestsReport: api.getPaths().junitIntegrationTestsReport
  });
}

module.exports = RunIntegrationTestsCommand;
