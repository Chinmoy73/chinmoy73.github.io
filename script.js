// Main JavaScript for Md Jahid Hasan Jone's website

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Ignore 'More' dropdown
            if (link.textContent.trim().toLowerCase().startsWith('more')) return;
            // Get the text and map to section id
            const text = link.textContent.trim().toLowerCase();
            let sectionId = '';
            if (text === 'home') sectionId = 'home';
            else if (text === 'education') sectionId = 'education';
            else if (text === 'experiences') sectionId = 'experiences';
            else if (text === 'projects') sectionId = 'projects';
            else if (text === 'publications') sectionId = 'publications';
            else return;
            const section = document.getElementById(sectionId);
            if (section) {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
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