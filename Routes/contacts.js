const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @ desc  Register a user
// @access Private
router.get('/', (req, res) => {
	res.send('get all contacts');
});
// @route  POST api/contacts
// @ desc  Add new contact
// @access Private
router.post('/', (req, res) => {
	res.send('registers a user');
});

// @route  Put api/contacts/:id
// @ desc  Add new contact
// @access Private
router.put('/:id', (req, res) => {
	res.send('update contact');
});

// @route  DEL api/contacts/:id
// @ desc  delete contact
// @access Private
router.delete('/:id', (req, res) => {
	res.send('delete contact');
});

module.exports = router;
