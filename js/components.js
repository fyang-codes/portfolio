// components.js - Reusable website components

// Create header component
function createHeader() {
  const header = document.createElement('header');
  
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = '618';
  
  const nav = document.createElement('nav');
  
  // Get current page path to determine active link
  const currentPath = window.location.pathname;
  
  const pages = [
    { path: '/work.html', name: 'work' },
    { path: '/with.html', name: 'with' },
    { path: '/play.html', name: 'play' },
    { path: '/index.html', name: 'about' }
  ];
  
  pages.forEach(page => {
    const link = document.createElement('a');
    link.href = page.path;
    link.textContent = page.name;
    
    // Set active class if this is the current page
    if (currentPath.includes(page.path)) {
      link.className = 'active';
    }
    
    nav.appendChild(link);
  });
  
  header.appendChild(logo);
  header.appendChild(nav);
  
  return header;
}

// Create footer component
function createFooter() {
  const footer = document.createElement('footer');
  footer.textContent = 'fan yang';
  return footer;
}

// Create project recommendations section
function createRecommendations(projects, currentId) {
  const section = document.createElement('section');
  section.className = 'recommendations';
  
  const heading = document.createElement('h2');
  heading.textContent = 'Discover More Projects';
  section.appendChild(heading);
  
  const grid = document.createElement('div');
  grid.className = 'grid';
  
  // Filter out current project and display others
  const otherProjects = projects.filter(project => project.id !== currentId);
  otherProjects.forEach(project => {
    const item = document.createElement('div');
    item.className = 'item';
    
    const link = document.createElement('a');
    link.href = project.url;
    
    const img = document.createElement('img');
    img.src = project.thumbnail;
    img.alt = `${project.title} thumbnail`;
    
    link.appendChild(img);
    link.appendChild(document.createTextNode(project.title));
    item.appendChild(link);
    grid.appendChild(item);
  });
  
  section.appendChild(grid);
  return section;
}

// Apply components to the page
document.addEventListener('DOMContentLoaded', function() {
  // Add header
  const body = document.body;
  body.insertBefore(createHeader(), body.firstChild);
  
  // Add footer
  body.appendChild(createFooter());
  
  // Add recommendations if this is a project page
  if (document.querySelector('main.project')) {
    const projects = [
      { id: 'work1', title: 'Where Should I Look?', url: 'work1.html', thumbnail: 'thumb1.jpg' },
      { id: 'work2', title: 'To Alarm, or Not to Alarm', url: 'work2.html', thumbnail: 'thumb2.jpg' },
      { id: 'work3', title: 'Women in Legislation', url: 'work3.html', thumbnail: 'thumb3.jpg' },
      { id: 'work4', title: 'Vita Verde Fitness Center', url: 'work4.html', thumbnail: 'thumb4.jpg' }
    ];
    
    const currentId = document.querySelector('main.project').dataset.projectId;
    const main = document.querySelector('main');
    main.appendChild(createRecommendations(projects, currentId));
  }
});
