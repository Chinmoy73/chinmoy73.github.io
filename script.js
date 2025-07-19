// Main JavaScript for Md Jahid Hasan Jone's website

document.addEventListener('DOMContentLoaded', function () {
    // Set active navigation based on current page
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

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
            const href = this.getAttribute('href');
            
            // Only prevent default for hash links (same page navigation)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                
                // Update active state
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Navigate to section
                navigateToSection(sectionId);
            } else if (href && href.endsWith('.html')) {
                // For HTML page links, allow normal navigation
                // Update active state before navigation
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Let the browser handle the navigation
                console.log('Navigating to:', href);
            }
        });
    });

    // Set active navigation on page load
    setActiveNavigation();
    
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