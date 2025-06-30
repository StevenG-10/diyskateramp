document.addEventListener('DOMContentLoaded', function() {

    // --- Random Page Load Sound ---
    function playRandomLoadSound() {
        // IMPORTANT: Add your page load sound files to the 'audio' folder
        const loadSounds = [
            'audio/load1.wav',
            'audio/load2.wav',
            'audio/load3.wav'
            // Add as many sounds as you like
        ];

        if (loadSounds.length > 0) {
            const randomIndex = Math.floor(Math.random() * loadSounds.length);
            const randomSound = new Audio(loadSounds[randomIndex]);
            randomSound.play().catch(error => console.error("Error playing sound:", error));
        }
    }
    playRandomLoadSound();


    // --- Home Page Photo Banner ---
    const photoBanner = document.querySelector('.photo-banner');
    if (photoBanner) {
        const bannerDotsContainer = photoBanner.querySelector('.banner-dots');
        const images = [
            // Add your 7 image paths here
            // 'images/banner1.jpg', 
            // 'images/banner2.jpg',
            // 'images/banner3.jpg',
            // 'images/banner4.jpg',
            // 'images/banner5.jpg',
            // 'images/banner6.jpg',
            // 'images/banner7.jpg'
        ];
        let currentImageIndex = 0;

        // Create image elements and dots if images are available
        if (images.length > 0) {
            images.forEach((src, index) => {
                // For now, we'll just set a background color as a placeholder
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.dataset.index = index;
                bannerDotsContainer.appendChild(dot);
            });

            // Function to show a specific image
            function showImage(index) {
                // This is where you would change the background image of the banner
                // For example: photoBanner.style.backgroundImage = `url(${images[index]})`;
                
                // For now, we'll just log to the console
                console.log(`Showing image ${index + 1}`);

                // Update active dot
                bannerDotsContainer.querySelectorAll('.dot').forEach(dot => {
                    dot.classList.remove('active');
                });
                bannerDotsContainer.querySelector(`.dot[data-index='${index}']`).classList.add('active');
                currentImageIndex = index;
            }

            // Event listener for dots
            bannerDotsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('dot')) {
                    const index = parseInt(e.target.dataset.index);
                    showImage(index);
                    // Reset interval on manual navigation
                    clearInterval(autoScrollInterval);
                    autoScrollInterval = setInterval(nextImage, 5000);
                }
            });

            // Function to show the next image
            function nextImage() {
                let newIndex = currentImageIndex + 1;
                if (newIndex >= images.length) {
                    newIndex = 0;
                }
                showImage(newIndex);
            }

            // Auto-scroll interval
            let autoScrollInterval = setInterval(nextImage, 5000); // 5 seconds

            // Initial image display
            showImage(0);
        } else {
            photoBanner.innerHTML = '<p>Add image paths to script.js to display the banner.</p>';
        }
    }

    // --- Navigation Button Click Sound ---
    const clickSound = new Audio('audio/click.wav'); // IMPORTANT: Create an 'audio' folder and add a 'click.wav' file.
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Play the sound
            clickSound.currentTime = 0; // Rewind to the start
            clickSound.play();

            // This prevents the page from navigating instantly, allowing the sound to be heard.
            // It's a small delay.
            const destination = button.href;
            e.preventDefault();
            setTimeout(() => {
                window.location.href = destination;
            }, 150); // 150 milliseconds delay
        });
    });

});