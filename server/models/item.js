const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const itemSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        default: "new item"
    },
    brand: {
        type: String,
        default: "AEKI"
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: "new item"
    },
    image : {
        type    : String,      
        default : "http://via.placeholder.com/350x200"
    },
    category: {
        type    : String,
        default : "furniture"
    }
})

const Item = mongoose.model( 'Item', itemSchema )

module.exports = Item;