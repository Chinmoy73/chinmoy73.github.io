// Main JavaScript for Md Jahid Hasan Jone's website

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the href attribute
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1); // Remove the #
                const section = document.getElementById(sectionId);
                
                if (section) {
                    // Smooth scroll to section
                    section.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update active navigation link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Update active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Education section editing functionality
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    
    editableElements.forEach(element => {
        // Add a subtle indicator that content is editable
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
        
        // Save changes to localStorage when user finishes editing
        element.addEventListener('blur', function() {
            const key = this.className + '_' + this.textContent.substring(0, 20);
            localStorage.setItem(key, this.textContent);
        });
        
        // Load saved content if available
        element.addEventListener('focus', function() {
            const key = this.className + '_' + this.textContent.substring(0, 20);
            const saved = localStorage.getItem(key);
            if (saved && saved !== this.textContent) {
                this.textContent = saved;
            }
        });
    });
}); 