module.exports = {
  renderLoginScreen: (req, res) => {
    res.render('loginScreen', {title: 'testNode', message: 'Login'});
  },

  renderRegistrationScreen: (req, res) => {
    res.render('registrationScreen', {title: 'testNode', message: 'Registration'});
  }
};
