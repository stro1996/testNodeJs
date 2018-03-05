const authorizationRoutes = require('./authorizationRoutes');
const itemCardRouts = require('./itemCardRouts');
const dashbordRoute = require('./dasghbordRoutes');
const startRouts = require('./startRouts');

module.exports = app => {
  authorizationRoutes(app);
  itemCardRouts(app);
  dashbordRoute(app);
  startRouts(app);
};
