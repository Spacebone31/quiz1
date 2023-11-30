
document.addEventListener('DOMContentLoaded', function () {
    // Show the initially hidden sections
    document.querySelectorAll('.w3-content').forEach(function (section) {
        section.style.display = 'block';
    });

    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add event listener for the transition end to handle page transitions
    document.body.addEventListener('transitionend', function () {
        // Get the current hash from the URL
        const currentHash = window.location.hash;

        // Check if the hash corresponds to a valid section
        if (currentHash && document.querySelector(currentHash)) {
            // Scroll smoothly to the target element after the transition ends
            document.querySelector(currentHash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

