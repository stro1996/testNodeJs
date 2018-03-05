const startScreenController = require('../controller/strtScreenController');

module.exports = app => {
  app.route('')
    .get(startScreenController.renderStartScreen);
};
