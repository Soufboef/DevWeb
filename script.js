// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Save user preference
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkMode);
}

// Load user theme preference
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkTheme');
    
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
    
    // Dynamic greeting based on time of day
    const greeting = document.getElementById('greeting');
    if (greeting) {
        const hour = new Date().getHours();
        let timeGreeting;
        
        if (hour < 12) {
            timeGreeting = "Good morning! I'm Soufyan";
        } else if (hour < 18) {
            timeGreeting = "Good afternoon! I'm Soufyan";
        } else {
            timeGreeting = "Good evening! I'm Soufyan";
        }
        
        greeting.textContent = timeGreeting;
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Fix for social links since you're using onclick
    document.querySelectorAll('.social-icon').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('http')) {
                window.open(this.getAttribute('href'), '_blank');
            }
        });
    });
});