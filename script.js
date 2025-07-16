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