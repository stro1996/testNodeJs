const Item    = require('../model/itemCardModel');

module.exports = {
  add: (req, res) => {
    let newItem = new Item(req.body);
    newItem.createdBy = req.user.email;
    newItem.save((err, item) => {
      if (err) {
        return res.sendStatus(400)
      }else {
        return res.sendStatus(200)
      }
    })
  },

  getAll: (req, res) => {
    Item.find({}, (err, result) => {
      let map = {};
      result.forEach((user) => {
        map[user._id] = user
      })
      return res.json(map)
    })
  },

  getMy: (req, res) => {
    Item.find({ createdBy: req.user.email}, (err, result) => {
      if (err) {
        return res.sendStatus(400)
      }
      return res.status(200).json({
        item: result
      })
    })
  },

  edditItem: (req, res) => {
    if (!req.body.id) {
      return res.sendStatus(400);
    }
    Item.findOne({ _id: req.body.id }, (err, result) => {
      if (err) {
        return res.sendStatus(500);
      }
      if (result.createdBy === req.user.email) {
        result.name = req.body.name || result.name;
        result.discription = req.body.discription || result.discription;

        result.save((err, result) => {
          if (err) {
            return res.sendStatus(500);
          }
          return res.status(200).json({
            newElement: result
          })
        })
      }else {
        return res.sendStatus(500);
      }
    })
  }
}
