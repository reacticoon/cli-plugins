function BuildCommand(req, res, api) {
  const sseEventName = "BUILD::BUILD_LOG";
  const taskId = api.generateUUID();

  api.runReacticoonCommand(`build`, {
    onError: message => {
      api.sendEventToCurrentSseClient(sseEventName, {
        type: "error",
        taskId,
        message
      });
    },
    onLog: message => {
      api.sendEventToCurrentSseClient(sseEventName, {
        type: "log",
        taskId,
        message
      });
    },
    onClose: ({ code }) => {
      api.sendEventToCurrentSseClient(sseEventName, {
        type: "done",
        taskId,
        code,
        message: `Ended with code ${code}`
      });
    }
  });

  res.send({
    sseEventName,
    taskId
  });
}

module.exports = BuildCommand;
