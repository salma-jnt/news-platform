const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Récupérer tous les articles
router.get('/', newsController.getAllNews);

// Récupérer un article par son ID
router.get('/:id', newsController.getNewsById);

// Créer un nouvel article
router.post('/', newsController.createNews);

module.exports = router;