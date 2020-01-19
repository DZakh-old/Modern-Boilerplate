const app = (module.exports = require('express')());

app.get('/', (req, res) => {
  res.send({ msg: 'Hello! Server is up and running!' });
});

app.use('/form', require('./form'));

app.all('*', (req, res) => {
  res.status(404).send({ msg: 'Not found!' });
});
