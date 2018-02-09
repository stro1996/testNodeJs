const itemCardController = require('../controller/itemController');

module.exports = app => {
  app.route('/itemCard/created')
    .post(itemCardController.add)
    .get(itemCardController.getAll)
}
