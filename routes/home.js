const express = require('express');
const router = express.Router();
const HomeControler = require('../controllers/Home.Controller.js');
router.get('/',HomeControler.getHome)
module.exports = router;
