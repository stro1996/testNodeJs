const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/uesrModel');

module.exports = {
  register: (req, res) => {
    let newUser = new User(req.body);
    if (newUser.checkPassword(req.body.password)) {
      return res.status(400).json({
        massage: 'worong password'
      });
    }
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
      if (err) {
        if (err.message.includes('User validation failed: email: Validator failed for path `email` with value')) return res.status(400).send({massage: 'wrong email'});
        return res.status(400).send({
          massage: 'such user already exists'
        });
      } else {
        user.hash_password = undefined;
        return res.json({token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id}, 'secret', {expiresIn: '1h'})});
      }
    });
  },

  takeAll: (req, res) => {
    User.find({}, (err, result) => {
      if (err) {
        console.log(err);
        return null;
      }
      let map = {};
      result.forEach((user) => {
        map[user._id] = user;
      });
      return res.json(map);
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

  ligonRequired: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  }
};
