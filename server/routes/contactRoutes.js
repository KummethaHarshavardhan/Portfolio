const express = require('express');
const router = express.Router();
const { submitContact, getContactHealth } = require('../controllers/contactController');

router.post('/', submitContact);

router.get('/health', getContactHealth);

module.exports = router;
