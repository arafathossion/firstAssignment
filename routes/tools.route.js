const express = require('express');
const usersControllers = require('../controllers/tools.controllers');
const viewCounter = require('../middleware/viewCounter');
const router = express.Router()



router.get('/:id', viewCounter, usersControllers.usersDetails);
router.get('/', usersControllers.getAllUsers);
router.post('/', usersControllers.postUsers);
router.patch('/:id', usersControllers.patchId)
// router.patch('/', usersControllers.bulkUpdate)
router.delete('/:id', usersControllers.delete)
module.exports = router;