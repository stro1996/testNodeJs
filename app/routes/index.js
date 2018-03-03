const authorizationRoutes = require('./authorizationRoutes');
const itemCardRouts = require('./itemCardRouts');
const dashbordRoute = require('./dasghbordRoutes');

module.exports = app => {
  authorizationRoutes(app);
  itemCardRouts(app);
  dashbordRoute(app);
};
