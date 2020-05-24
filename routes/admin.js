const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/home', adminController.getHomePage); // Get home page

router.get('/today', adminController.getToday); // Get today page

router.get('/new-task', adminController.getAddTask);

router.post('/create-task', adminController.postAddTask);

router.post('/delete-task', adminController.postDeleteTask);
// router.post('/add-product', adminController.postAddTask); // Post new task in data base


module.exports = router;
//
