// project-template.js - Dynamic content for project pages

document.addEventListener('DOMContentLoaded', function() {
    // Get project data from the data attributes
    const main = document.querySelector('main');
    if (!main) return;
    
    const projectData = {
        title: main.dataset.title || "Project Title",
        summary: main.dataset.summary || "Project summary",
        category: main.dataset.category || "work",
        reasoning: document.getElementById('reasoning-content')?.innerHTML,
        process: document.getElementById('process-content')?.innerHTML,
        processImage: main.dataset.processImage,
        processCaption: main.dataset.processCaption,
        results: document.getElementById('results-content')?.innerHTML,
        resultsImage: main.dataset.resultsImage,
        resultsCaption: main.dataset.resultsCaption,
        recommendations: JSON.parse(main.dataset.recommendations || '[]')
    };
    
    renderProjectPage(projectData);
});

// Render the project page with the provided data
function renderProjectPage(data) {
    const main = document.querySelector('main');
    if (!main) return;
    
    // Get the path to root and images
    const pathToRoot = getPathToRoot();
    const pathToImages = pathToRoot + 'images/';
    
    // Create project content
    let html = `
        <h1>${data.title}</h1>
        <p><em>${data.summary}</em></p>
        
        <h2>Reasoning</h2>
        ${data.reasoning || '<p>Reasoning content goes here.</p>'}
        
        <h2>Process</h2>
        ${data.process || '<p>Process content goes here.</p>'}
    `;
    
    // Add process image if available
    if (data.processImage) {
        html += `
        <div class="image-block">
            <img src="${pathToImages + data.processImage}" alt="Process illustration">
            <p><em>${data.processCaption || ''}</em></p>
        </div>
        `;
    }
    
    html += `
        <h2>Results</h2>
        ${data.results || '<p>Results content goes here.</p>'}
    `;
    
    // Add results image if available
    if (data.resultsImage) {
        html += `
        <div class="image-block">
            <img src="${pathToImages + data.resultsImage}" alt="Results visualization">
            <p><em>${data.resultsCaption || ''}</em></p>
        </div>
        `;
    }
    
    // Add recommendations section
    if (data.recommendations && data.recommendations.length > 0) {
        html += `
        <section class="recommendations">
            <h2>Discover More Projects</h2>
            <div class="grid">
        `;
        
        data.recommendations.forEach(rec => {
            html += `
                <div class="item">
                    <a href="${rec.url}">
                        <img src="${pathToImages + rec.thumbnail}" alt="${rec.title} thumbnail">
                        ${rec.title}
                    </a>
                </div>
            `;
        });
        
        html += `
            </div>
        </section>
        `;
    }
    
    // Update the main content
    main.innerHTML = html;
}

// Helper function to determine the path to the root directory
function getPathToRoot() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    
    // If we're at the root already
    if (depth <= 1) return '';
    
    // Otherwise go up based on folder depth
    return '../'.repeat(depth - 1);
}
