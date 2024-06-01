document.querySelector('.search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = e.target.value;
        if (query) {
            const searchUrl = `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}/`;
            window.location.href = searchUrl;
        }
    }
});