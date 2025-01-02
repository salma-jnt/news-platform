// Fonction pour récupérer un article par son ID et l'afficher
async function fetchNewsById() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id'); // Récupère l'ID de l'article à partir de l'URL

    try {
        const response = await fetch(`/api/news/${articleId}`);
        const article = await response.json();
        
        // Afficher les détails de l'article
        displayArticle(article);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger l\'article');
    }
}

// Fonction pour afficher un article
function displayArticle(article) {
    const container = document.getElementById('article-container');
    container.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
    `;
}

// Fonction pour afficher un message d'erreur
function showError(message) {
    const container = document.getElementById('article-container');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('text-danger');
    errorMessage.textContent = message;
    container.appendChild(errorMessage);
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchNewsById);