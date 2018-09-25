const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/uesrModel');

module.exports = {
  register: (req, res) => {
    let newUser = new User(req.body);
    if (newUser.checkPassword(req.body.password)) {
      return res.status(400).json({
        message: 'wrong password'
      });
    }
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
      if (err) {
        if (err.message.includes('User validation failed: email: Validator failed for path `email` with value')) {
          return res.status(400).send({message: 'wrong email'});
        }
        return res.status(400).send({
          message: err.name || 'such user already exists'
        });
      } else {
        user.hash_password = undefined;
        return res.json({token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id}, 'secret', {expiresIn: '10h'})});
      }
    });
  },

  singIn: (req, res) => {
    User.findOne({
      email: req.body.email
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id}, 'secret', { expiresIn: '1h' })});
        }
      }
    });
  },

};
