// We need to bring in express to use the router
const express = require('express');
const router = express.Router();

//router replaces what we used to do: 'app.post/get/...
//We're registering a user through a 'post' http request

// @route     GET  api/contacts
// @desc     Get all user's contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route     POST  api/contacts
// @desc     Add new contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

/* with PUT and DELETE requests we need to specify the contact by using the :id placeholder*/

// @route     PUT  api/contacts/:id
// @desc     Update contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update Contact ');
});

// @route     DELETE  api/contacts/:id
// @desc     Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact ');
});

// we have to export the router or it won't work
module.exports = router;
