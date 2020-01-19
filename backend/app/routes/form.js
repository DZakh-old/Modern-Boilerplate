const app = (module.exports = require('express')());

const { sendFormData } = require('../actions/form');

app.post('/', async (req, res, next) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  sendFormData(req.body);

  return res.status(200).json({ message: 'Success!' });
});
