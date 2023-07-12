const router = require('express').Router();
const { handleApiError, handleNotFound } = require('../middleware');

// Delegate request to sub-routers
router.use('/auth', require('../components/auth/authRouter'));

// Catch not-found requests
router.use(handleNotFound);

// Handle api errors
router.use(handleApiError);

module.exports = router;
