const express = require('express');
const router = express.Router();
const { showItem, addItem, deleteItem, updateItem, searchItem } = require('../controllers/item')
const { memUpload } = require('../middleware/multer')

/* GET users listing. */
router
.get('/', showItem)
.get('/search', searchItem)
.post('/', addItem)
.put('/', updateItem)
.delete('/', deleteItem)

module.exports = router;
