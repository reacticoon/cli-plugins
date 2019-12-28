const initiateTravisAction = require('../actions/initiateTravisAction')

function CommandTravisInfo(req, res, api) {
  const { ciType = 'travis' } = req.body.payload;

  switch (ciType) {
    case 'travis':

      initiateTravisAction(api)

      res.send({ success: true })
      break

    default:
      res.status(400).send({ error: 'Invalid ci type '})
  }
}

module.exports = CommandTravisInfo;
