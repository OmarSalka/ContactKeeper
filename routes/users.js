// We need to bring in express to use the router
const express = require('express');
const router = express.Router();

//router replaces what we used to do: 'app.post/get/...
//We're registering a user through a 'post' http request

// @route     POST  api/users
// @desc     Register a user
// @access    Public
/*we need access because some of our routes
will be private where you have to be logged in - you have to have a token stored and send a token to access that route. But this is going to be public because it's it's to register it's to actually become a user.*/
router.post('/', (req, res) => {
  res.send('Register a user');
}); //the '/' pertains to /api/users cuz we defined that in server.js

// we have to export the router or it won't work
module.exports = router;
