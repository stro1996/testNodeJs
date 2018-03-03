const userController = require('../controller/userController');

module.exports = app => {
  app.route('/auth/register')
    .post(userController.register)
    .get(userController.takeAll);

  app.route('/auth/sign_in')
    .post(userController.singIn);
};
