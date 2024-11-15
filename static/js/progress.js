// Function to update the scroll indicator
function updateScrollIndicator() {
    // Get the total scrollable height of the document
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;

    // Set the width of the scroll indicator based on the scroll percentage
    document.querySelector('.scroll-indicator').style.width = scrollPercentage + '%';
}

// Event listener to call updateScrollIndicator on scroll
window.addEventListener('scroll', updateScrollIndicator);