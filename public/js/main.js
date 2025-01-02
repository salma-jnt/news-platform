async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();
        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

function displayNews(news) {
    const container = document.getElementById('news-container');
    news.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.body}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
function showError(message) {
    const container = document.getElementById('news-container');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('text-danger');
    errorMessage.textContent = message;
    container.appendChild(errorMessage);
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);