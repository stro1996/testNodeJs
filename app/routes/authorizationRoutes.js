const userController = require('../controller/userController');

module.exports = app => {
  app.route('/auth/register')
    .post(userController.register);

  app.route('/auth/sign_in')
    .post(userController.singIn);
};
