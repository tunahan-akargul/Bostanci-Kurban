document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.tabMenu').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.tabMenu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});