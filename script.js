document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) {
            alert('Por favor, digite um termo de busca.');
            return;
        }
        
        // Get selected search engine
        const selectedEngine = document.querySelector('input[name="engine"]:checked').value;
        
        // Encode search term for URL
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        
        // Define URLs for each search engine
        let searchUrl = '';
        
        switch(selectedEngine) {
            case 'google':
                searchUrl = `https://www.google.com/search?tbm=isch&q=${encodedSearchTerm}`;
                break;
            case 'bing':
                searchUrl = `https://www.bing.com/images/search?q=${encodedSearchTerm}`;
                break;
            case 'yahoo':
                // Yahoo redirects to Flickr for images
                searchUrl = `https://images.search.yahoo.com/search/images?p=${encodedSearchTerm}`;
                break;
            case 'yandex':
                searchUrl = `https://yandex.com/images/search?text=${encodedSearchTerm}`;
                break;
            case 'pixabay':
                searchUrl = `https://pixabay.com/images/search/${encodedSearchTerm}`;
                break;
            case 'pexels':
                searchUrl = `https://www.pexels.com/search/${encodedSearchTerm}`;
                break;
            case 'unsplash':
                searchUrl = `https://unsplash.com/s/photos/${encodedSearchTerm}`;
                break;
            case 'freepik':
                searchUrl = `https://www.freepik.com/search?query=${encodedSearchTerm}`;
                break;
            case 'pinterest':
                searchUrl = `https://www.pinterest.com/search/pins/?q=${encodedSearchTerm}`;
                break;
            default:
                searchUrl = `https://www.google.com/search?tbm=isch&q=${encodedSearchTerm}`;
        }
        
        // Open the search results in a new tab
        window.open(searchUrl, '_blank');
        
        // Optional: Clear the search input after submission
        // searchInput.value = '';
    });
});