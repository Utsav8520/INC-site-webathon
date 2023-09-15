const express = require('express');
const router = express.Router();
const user = require('./../model/user');
const userController = require('./../controller/userController')

const renderFile = require('./../controller/render');
const { render } = require('pug');

router.get('/login', renderFile.renderLogin)
router.get("/dashboard", renderFile.renderFirst);
router.get("/student-data", renderFile.renderTable);
router.get("/Accounts", renderFile.renderThird);
// router.get("/bills", renderFile.renderbills);

router.get("/studentDashboard", renderFile.studentDashboard);
router.get("/studentTable", renderFile.studentTable);
router.get("/studentBilling", renderFile.studentBilling);
router.get("/studentProfile", renderFile.studentProfile);
// router.get("/studentindex", renderFile.studentindex);
// only for admins

module.exports = router;