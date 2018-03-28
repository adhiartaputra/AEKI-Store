const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {

    sign_up: (req,res) => {
        const hash = bcrypt.hashSync(req.body.password, salt);
        let newUser = {
          username      : req.body.username,
          password      : hash,
          role          : req.body.role || 'user'
        }
        User.create(newUser)
        .then(newList => {
          res.status(200).json({
            message : "sucessfully add new user",
            data    : newList
          })
        })
    },

    getUserDetail: (req, res) => {
        User.findOne({_id: req.params.id})
            .exec()
            .then(data => {
                res.status(200).json({
                    message: 'Success',
                    data: data
                })
            })
    },
    getUser: (req, res) => {
        User.find()
            .exec()
            .then(data => {
                res.status(200).json({
                    message: 'Success',
                    data: data
                })
            })
    },
    deleteUser: (req, res) => {
        User.remove({_id: req.params.id}, (err, data)=>{
            res.status(200).json({
                message: 'Item deleted',
            })
        })
    },
    verifyUser: (req, res, next) => {
        console.log(req.decoded)
        const email = req.decoded.email;
        User.findOne({email : email})
          .exec().then(foundUser => {
            if (foundUser) {
                console.log('verify succesful')
                req.user = foundUser
              next()
            } else {
              res.status(401).json({
                message: 'User is not authorized to post here.'
              })
            }
          })
          .catch(err => {
            res.status(500).json({
              message: 'Server Error',
              err: err
            })
          })
    }
}
