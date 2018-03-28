const Item = require('../models/item')
const jwt = require('jsonwebtoken');


module.exports = {
  addItem: function (req, res) {
    const { name, brand, price, description, image } = req.body
    // let token = req.headers.token
    // let decoded = jwt.verify(token, process.env.SECRET)
    // console.log(decoded);
    console.log(req.body,'REQ BODY <<<<<<<<<<<');
    const newItem = new Item()
      // newItem.owner = decoded._id
      newItem.name = req.body.name
      newItem.brand = req.body.brand
      newItem.price = req.body.price
      newItem.description = req.body.description
      newItem.image = req.body.image
      newItem.save().then(item => {
        res.status(201).json({
          message: 'Create new item success',
          item
        })
      }).catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'error'
        })
      })
  },
  showItem: function (req, res) {    
    let token = req.headers.token
    // let decoded = jwt.verify(token, process.env.SECRET)
    Item.find()
    // .populate('owner')
    // .sort({status: 'asc'})
    .exec((err,item) => {
      if(err){
        res.status(404).json({
          message: "data not found",
          err
        })
      } else {
        res.status(201).json({
          message: "here's your data",
          item
        })
      }
    })
  },
  deleteItem: function (req, res) {
    Item.deleteOne({_id: req.headers.id}).then(() => {
      res.status(200).json({
        message: 'deleted'
      })
    })
  },
  updateItem: function (req, res) {
    Item.findOneAndUpdate({ _id: req.headers.id }, { $set: req.body }, {new: true}, (err, item) => {
      if(err) {
        res.status(404).json({
          message: 'User not found',
          err
        })
      } else {
        res.status(201).json({
          message: 'Data update success',
          udpated: item
        })
      }
    })
  },
  searchItem: function (req,res) {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.SECRET)
    Item.findOne({
      $or: [
        {name: req.body.name},
        {price: req.body.price},
      ]
    }).then((err,item) => {
      if(item){
        res.status(201).json({
          message: 'here \'s your data',
          data: item
        })
      }
    })
  }
};
