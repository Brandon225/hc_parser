'use strict';

const express = require('express');
const router = express.Router();

// /api
// Get list of all items
router.get("/", (req, res, next) => {
    console.log(`Load root!`);
    res.json('Hello!');
    next();
});

// /api/recieve-xml
// Post form data
router.post('/receive-xml', (req, res, next) => {
    console.log(`recieve-xml req.body? ${req.body}`);
    res.json('Recieve xml!');
    next();
});

module.exports = router;