const mongoose    = require('mongoose');
const bcrypt      = require('bcrypt');
const Schema      = mongoose.Schema;

let UserSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    validate: (email) => {
      return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
    }
  },
  hash_password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: new Date()
  }
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

UserSchema.methods.checkPassword = (password) => {
  let regPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if (password && regPassword.test(password)) return false;
  return true
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
