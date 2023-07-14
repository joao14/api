const router = require('express').Router();

const {
  files,
  listAllFiles
} = require('./fileController');

router.get('/data', files);

router.get('/list', listAllFiles)

module.exports = router;
