const router = require('express').Router();

// Delegate request to sub-routers
router.use('/api/v1/files', require('../components/file/fileRouter'));


module.exports = router;
