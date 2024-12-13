// Load the JSON file
fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
        // Initialize Lunr.js index
        const idx = lunr(function () {
            this.ref('id');            // Unique identifier for each document
            this.field('title');       // Fields to search
            this.field('content');
            data.forEach(doc => this.add(doc));
        });

        // Handle search input
        document.getElementById('search').addEventListener('input', function () {
            const query = this.value.trim(); // Get input value
            const results = idx.search(query); // Perform search

            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear previous results

            // Display search results
            results.forEach(result => {
                const item = data.find(doc => doc.id === result.ref);
                if (item) {
                    resultsContainer.innerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
                }
            });

            // Show message if no results found
            if (results.length === 0 && query !== '') {
                resultsContainer.innerHTML = '<li>No results found.</li>';
            }
        });
    });