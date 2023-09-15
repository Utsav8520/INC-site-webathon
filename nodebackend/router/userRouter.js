const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController')

// only for admins
router.post('/login', userController.createAccount);
router.post("/signin", userController.signin);
router.post("/updateInformation", userController.updateInformation);

module.exports = router;