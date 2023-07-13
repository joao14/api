const router = require('express').Router();

const {
  files,
} = require('./fileController');

router.get('/', files);

module.exports = router;
