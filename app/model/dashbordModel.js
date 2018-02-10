const Item = require('./itemCardModel');

let Dasbord = function(name) {
  this.name = name;
}

Dasbord.prototype.get = function(cb) {
  Item.find({ createdBy: {$ne: this.name}}, (err, result) => {
    if (err) {
      cb(null);
    }
    cb(result);
  })
}

module.exports = Dasbord;
