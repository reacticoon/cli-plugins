const listFiles = require("../actions/listFiles");

function ListMockApiFilesServerCommand(req, res) {
  const filesList = listFiles();

  res.json(filesList);
}

module.exports = ListMockApiFilesServerCommand;
