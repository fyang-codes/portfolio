// common.js - Handles common components like header and footer

document.addEventListener('DOMContentLoaded', function() {
    insertHeader();
    insertFooter();
    highlightCurrentNavItem();
});

// Insert the header on all pages
function insertHeader() {
    const header = document.createElement('header');
    
    // Get the relative path to the root
    const pathToRoot = getPathToRoot();
    
    header.innerHTML = `
        <div>
            <img src="${pathToRoot}images/logo.jpg" alt="logo" style="height: 50px; width: 50px; border-radius: 50%; object-fit: cover;" />
        </div>
        <nav>
            <a href="${pathToRoot}work/work.html">work</a>
            <a href="${pathToRoot}with/with.html">with</a>
            <a href="${pathToRoot}play/play.html">play</a>
            <a href="${pathToRoot}index.html">about</a>&nbsp;&nbsp;
            <span class="tooltip" aria-label="plant info">
                🪴
                <span class="tooltip-panel">one year strong 🪴</span>
            </span>
        </nav>
    `;
    
    // Insert at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
}

// Insert the footer on all pages
function insertFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '@ 2025        fan yang';
    
    // Insert at the end of the body
    document.body.appendChild(footer);
}

// Highlight the current navigation item based on the URL
function highlightCurrentNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (currentPath.includes('work') && link.textContent === 'work') {
            link.style.color = '#6BBF59';
        } else if (currentPath.includes('with') && link.textContent === 'with') {
            link.style.color = '#6BBF59';
        } else if (currentPath.includes('play') && link.textContent === 'play') {
            link.style.color = '#6BBF59';
        } else if (currentPath.includes('index.html') && link.textContent === 'about') {
            link.style.color = '#6BBF59';
        }
    });
}

// Helper function to determine the path to the root directory
function getPathToRoot() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    
    // If we're at the root already
    if (depth <= 1) return './';
    
    // Otherwise go up based on folder depth
    return '../'.repeat(depth - 1);
}
