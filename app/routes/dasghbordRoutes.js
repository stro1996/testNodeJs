const dashbordController = require('../controller/dashbordControler');

module.exports = app => {
  app.route('/dashbord')
    .get(dashbordController.get);
};
