const userController = require('../controller/userController');
const loginController = require('../controller/loginController');

module.exports = app => {
  app.route('/auth/register')
    .post(userController.register)
    .get(loginController.renderRegistrationScreen);

  app.route('/auth/sign_in')
    .post(userController.singIn)
    .get(loginController.renderLoginScreen);
};
