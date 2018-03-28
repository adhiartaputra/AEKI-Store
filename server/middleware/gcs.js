const Storage = require('@google-cloud/storage');

// TODO change immediately!
const config = {
  CLOUD_BUCKET: 'aeki.adhiarta.com',
  PROJECT_ID: 'to-do-fancy'
}

// confirm service api
const storage = Storage({
  projectId: config.PROJECT_ID,
  keyFilename: 'To-Do Fancy-be32a23c13bc.json' // TODO change immediately!
});

function storageUrl (filename) {
  return `https://storage.googleapis.com/${config.CLOUD_BUCKET}/${filename}`;
}

// middleware

function googleUpload (req, res, next) {
  const bucket = storage.bucket(config.CLOUD_BUCKET)
  if (!req.file) {
    console.log('no file uploaded, skipping...');
    return next();
  }

  let extension = req.file.originalname.split('.').pop();
  const destination = `${req.body.facebookId}/`;
  const uploadName = destination + Date.now() + '-AEKI.' + extension;
  const file = bucket.file(uploadName);

  // streaming
  const stream = file.createWriteStream({
    metadata: {
      contentType : req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = uploadName;
    file.makePublic()
      .then(() => {
        console.log('upload finished');
        req.file.imgUrl = storageUrl(uploadName);
        next();
      });
  });

  stream.end(req.file.buffer);
}

function googleDelete (req, res, next) {
  // TODO change the bucket name
  let extra = 'https://storage.googleapis.com/aeki.adhiarta.com/';
  const targetFile = req.toDelete.filePath.substr(extra.length);
  console.log(targetFile);

  storage
    .bucket(config.CLOUD_BUCKET)
    .file(targetFile)
    .delete()
    .then(() => {
      console.log(`${config.CLOUD_BUCKET}/${targetFile} is deleted`);
      next()
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed to delete image'
      })
    })
}

module.exports = {
  googleUpload: googleUpload,
  googleDelete: googleDelete
};
