const Item = require('../model/itemCardModel');


const add = (req, res) => {
  let newItem = new Item(req.body);
  newItem.createdBy = req.user.email;
  newItem.save((err, item) => {
    if (err) {
      return res.sendStatus(400);
    } else {
      return res.sendStatus(200);
    }
  });
};

const getAll = (req, res) => {
  Item.find({}, (err, result) => {
    if (err) {
      return res.sendStatus(400);
    }
    return res.json(result);
  });
};

const getMy = (req, res) => {
  Item.find({createdBy: req.user.email}, (err, result) => {
    if (err) {
      return res.sendStatus(400);
    }
    return res.status(200).json(result);
  });
};

const edditItem = (req, res) => {
  checkId (req, res);

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
        });

      });
    } else {
      return res.status(400).json({message: `don't try to eddit what belongs to another`});
    }
  });
};

const deleteItem = (req, res) => {
  checkId (req, res);

  Item.findOne({ _id: req.body.id }, (err, result) => {
    if (err) {
      return res.sendStatus(500);
    }

    if (result.createdBy === req.user.email) {
      Item.deleteOne({ _id: req.body.id}, (err, result) => {

        if (err) {
          return res.sendStatus(500);
        }

        return res.sendStatus(200);
      })
    } else {
      return res.status(400).json({message: `don't try to delet what belongs to another`})
    }
  })
};

const checkId = (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({message: `pls add id`});
  }
};


module.exports = {
  add,
  getAll,
  getMy,
  edditItem,
  deleteItem,
};
