document.getElementById('create-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue.');
    }
});