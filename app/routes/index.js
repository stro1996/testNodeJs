const authorizationRoutes = require('./authorizationRoutes');
const itemCardRouts = require('./itemCardRouts');
const startRouts = require('./startRouts');

module.exports = app => {
  authorizationRoutes(app);
  itemCardRouts(app);
  startRouts(app);
};
