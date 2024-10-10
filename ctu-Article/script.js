document.getElementById('explore-button').addEventListener('click', function() {
    document.getElementById('hidden-sections').style.display = 'block';
});

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Add event listener to each gallery image
galleryImages.forEach((image) => {
    image.addEventListener('click', function() {
        // Get the image source and content
        const imageSource = image.src;
        const imageContent = image.nextElementSibling;

        // Get the lightbox elements
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDescription = document.getElementById('lightbox-description');

        // Set the lightbox content
        lightboxImage.src = imageSource;
        lightboxTitle.textContent = imageContent.querySelector('h2').textContent;
        lightboxDescription.textContent = imageContent.querySelector('p').textContent;

        // Show the lightbox
        document.getElementById('lightbox-container').style.display = 'flex';
    });
});

// Add event listener to the lightbox back button
document.getElementById('lightbox-back-button').addEventListener('click', function() {
    // Hide the lightbox
    document.getElementById('lightbox-container').style.display = 'none';
});