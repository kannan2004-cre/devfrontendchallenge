function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.2, // Adjust as needed to control when the animation triggers
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('animate');
                }
                if (entry.target.classList.contains('fade-hidden')) {
                    entry.target.classList.remove('fade-hidden');
                    entry.target.classList.add('animate-fade');
                }
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, observerOptions);

    // Target headings and articles to animate
    const elementsToAnimate = document.querySelectorAll('h2, h3, article');

    elementsToAnimate.forEach(el => {
        if (el.tagName === 'H2' || el.tagName === 'H3') {
            el.classList.add('fade-hidden'); // Fade animation for headings
        } else {
            el.classList.add('hidden'); // Slide animation for boxes
        }
        observer.observe(el);
    });
});

