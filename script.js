// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Navbar background color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1B5E20'; // Darker green when scrolled
    } else {
        navbar.style.backgroundColor = '#2E7D32'; // Original green when at top
    }
});

// Add animation to product cards when they come into view
const productCards = document.querySelectorAll('.product-card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add hover effect to achievement items
const achievements = document.querySelectorAll('.achievements li');
achievements.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#2E7D32';
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.transform = 'translateX(0)';
    });
});

// Handle brochure download
document.querySelector('.download-button').addEventListener('click', function(e) {
    // Check if the file exists
    fetch(this.href)
        .then(response => {
            if (!response.ok) {
                e.preventDefault();
                alert('The brochure is currently being updated. Please contact us to request the latest version.');
            }
        })
        .catch(() => {
            e.preventDefault();
            alert('The brochure is currently being updated. Please contact us to request the latest version.');
        });
}); 
