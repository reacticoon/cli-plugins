/**
 */
function StartWebUIServerCommand(req, res, api) {
  //https://github.com/alberthier/git-webui
  const command = api.getOption("webui.command", "git webui");
  const url = api.getOption("webui.url", "git webui");

  try {
    if (
      api.execSimpleSync(
        `ps aux | grep "${command}" | grep -v grep | wc -l`
      ) === "1"
    ) {
      // already spawned
      api.info("git webui already spawned");
    } else {
      api.runCommand(command);

      api.info("Spawning git webui");
    }
    res.send({ success: true, command, url });
  } catch (e) {
    res.status(400).send({ success: false, command, url });
  }
}

module.exports = StartWebUIServerCommand;
