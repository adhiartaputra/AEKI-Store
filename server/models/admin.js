const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: String,
    name: String,
    profilImg: String,
    facebookId: String
});

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;