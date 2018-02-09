const Item    = require('../model/itemCardModel');

module.exports = {
  add: (req, res) => {
    let newItem = new Item(req.body);
    newItem.createdBy = req.user.fullName;
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
  }
}
