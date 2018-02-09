const authorizationRoutes   = require('./authorizationRoutes');
const itemCardRouts         = require('./itemCardRouts');

module.exports = app => {
  authorizationRoutes(app),
  itemCardRouts(app)
}
