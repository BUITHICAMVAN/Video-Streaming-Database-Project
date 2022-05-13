const express = require("express");
const router = express.Router()
const MovieController = require('../controllers/MoviesController');

router.get('/', MovieController.view);
router.post('/', MovieController.find);
router.get('/addmovie', MovieController.form);


module.exports = router;
