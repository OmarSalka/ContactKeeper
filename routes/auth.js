// We need to bring in express to use the router
const express = require('express');
const router = express.Router();

//router replaces what we used to do: 'app.post/get/...
//We're registering a user through a 'post' http request

// @route     GET  api/auth
// @desc     Get logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route     POST  api/auth  /*it's a post request cuz we're sending data to get authenticated*/
// @desc     Authenticate user & get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

// we have to export the router or it won't work
module.exports = router;
