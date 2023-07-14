const router = require('express').Router();
const { handleApiError } = require('../middleware');

router.use('/api/v1/files', require('../components/file/fileRouter'));

// Handle api errors
router.use(handleApiError);


module.exports = router;
