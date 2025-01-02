const axios = require('axios');
const DUMMY_JSON_URL = 'https://dummyjson.com/posts';

const newsController = {
    // Récupérer tous les articles
    async getAllNews(req, res) {
        try {
            const response = await axios.get(DUMMY_JSON_URL);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur lors de la récupération des articles' });
        }
    },

    // Récupérer un article par son ID
    async getNewsById(req, res) {
        const articleId = req.params.id;

        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${articleId}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message:`Erreur serveur lors de la récupération de l'article avec l'ID  ${articleId}`});
        }
    },

    // Créer un nouvel article
    async createNews(req, res) {
        const { title, content } = req.body;

        // Vérifier que les données sont présentes
        if (!title || !content) {
            return res.status(400).json({ message: 'Le titre et le contenu sont nécessaires pour créer un article.' });
        }

        // Simuler la création d'un article (ici vous pouvez éventuellement l'ajouter à une base de données ou à un fichier)
        const newArticle = { title, content };

        // Pour l'exercice, on retourne simplement l'article créé
        res.status(201).json({
            message: 'Article créé avec succès',
            article: newArticle
        });
    }
};

module.exports = newsController;