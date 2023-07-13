const router = require('express').Router();

// Delegate request to sub-routers
router.use('/files', require('../components/file/fileRouter'));


module.exports = router;
