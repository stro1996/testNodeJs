const itemCardController = require('../controller/itemController');

module.exports = app => {
  app.route('/item_card')
    .post(itemCardController.add)
    .put(itemCardController.edditItem)
    .delete(itemCardController.deleteItem)
    .get(itemCardController.getAll);

  app.route('/item_card/get_my')
    .get(itemCardController.getMy);

};
