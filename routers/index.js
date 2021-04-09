const express = require('express');
const router =  express.Router();

// get controller for home page
const home_controller = require('../controllers/home_controller');

// routes for home page
router.get('/' , home_controller.home);

// other routes handled from respective files

module.exports = router;