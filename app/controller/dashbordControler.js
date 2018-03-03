const Dasbord = require('../model/dashbordModel');

module.exports = {
  get: (req, res) => {
    let newDashbord = new Dasbord(req.user.email);
    newDashbord.get((result) => {
      if (result === null) {
        return res.sendStatus(500);
      }
      return res.status(200).json({
        item: result
      });
    });
  }
};
