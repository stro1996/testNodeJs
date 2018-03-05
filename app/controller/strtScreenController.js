module.exports = {
  renderStartScreen: (req, res, next) => {
    res.render('startScreen', { title: 'testNode', message: 'Hello!'});
  }
};
