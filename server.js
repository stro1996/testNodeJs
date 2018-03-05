const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const route = require('./app/routes/index');

const port = 3012;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', './app/view/html');
app.set('view engine', 'pug');

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization) {
    jwt.verify(req.headers.authorization, 'secret', (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      if (!req.user && (req.path !== '/auth/register' || req.path !== '/auth/sign_in')) {
        return res.sendStatus(401);
      }
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

route(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

const startServer = () => {
  app.listen(port);
  console.log(`Server start at port ${port}`);
};

const connectDB = () => {
  mongoose.Promise = bluebird;

  mongoose.connect('mongodb://localhost/testmongoose');
  return mongoose.connection;
};

connectDB()
  .on('error', console.log)
  .on('disconnected', connectDB)
  .once('open', startServer);
