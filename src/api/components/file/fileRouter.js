const router = require('express').Router();

const {
  files,
} = require('./fileController');

router.get('/data', files);

module.exports = router;
