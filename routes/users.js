// We need to bring in express to use the router
const express = require('express');
//router replaces what we used to do: 'app.post/get/...
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route     POST  api/users
// @desc     Register a user
// @access    Public
router.post('/', [], (req, res) => {
  res.send(req.body);
});

module.exports = router;
