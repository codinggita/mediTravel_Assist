const express = require('express');
const router = express.Router();

// Placeholder for doctor routes
router.get('/', (req, res) => {
    res.json({ message: 'Doctor routes are working' });
});

module.exports = router;
