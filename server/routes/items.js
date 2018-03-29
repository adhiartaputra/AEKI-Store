const express = require('express');
const router = express.Router();
const { showItem, addItem, deleteItem, updateItem, searchItem } = require('../controllers/item')
const { googleUpload } = require('../middleware/gcs')
const multer = require('multer')
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10*1024*1024
  }
})

/* GET users listing. */
router
.get('/', showItem)
.get('/search', searchItem)
.post('/', upload.single('image'), googleUpload, addItem)
.put('/', updateItem)
.delete('/', deleteItem)

module.exports = router;
