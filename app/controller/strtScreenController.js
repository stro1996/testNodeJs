module.exports = {
  renderStartScreen: (req, res, next) => {
    res.render('loginScreen', { title: 'testNode', message: 'Hello!'});
  }
}
