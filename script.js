// Main JavaScript for Md Jahid Hasan Jone's website

document.addEventListener('DOMContentLoaded', function () {
    // Simple navigation function
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            console.log('Navigating to:', sectionId); // Debug log
        } else {
            console.log('Section not found:', sectionId); // Debug log
        }
    }

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the section ID from href
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                
                // Update active state
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Navigate to section
                navigateToSection(sectionId);
            }
        });
    });

    // Test navigation on page load
    console.log('Navigation script loaded');
    console.log('Available sections:', Array.from(document.querySelectorAll('section[id]')).map(s => s.id));

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