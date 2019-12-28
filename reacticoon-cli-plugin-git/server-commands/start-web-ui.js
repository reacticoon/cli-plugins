/**
 */
function CommandStartWebUI(req, res, api) {
  //https://github.com/alberthier/git-webui
  let command = api.getOption("webui.command", "git webui");
  let url = api.getOption("webui.url", "git webui");

  try {
    if (
      api.execSimpleSync(
        `ps aux | grep "${command}" | grep -v grep | wc -l`
      ) === "1"
    ) {
      // already spawned
      api.info("git webui already spawned");
    } else {
      const argv = command.split(" ");
      api.spawn(argv[0], argv.slice(1));
      api.info("Spawning git webui");
    }
    res.send({ success: true, command, url });
  } catch (e) {
    res.status(400).send({ success: false, command, url });
  }
}

module.exports = CommandStartWebUI;
