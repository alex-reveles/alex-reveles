const projects = [
  {
    title: "Project One: Portfolio Launch",
    description:
      "A clean and responsive portfolio website designed to present my work, background, and contact details with a professional look.",
    timeline: "2026 · Personal Project",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    codeUrl: "#"
  }
  // Add up to 3-5 projects by appending objects with the same shape.
];

const projectGrid = document.getElementById("project-grid");

projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const techTags = project.stack.map((tech) => `<li>${tech}</li>`).join("");

  article.innerHTML = `
    <h3>${project.title}</h3>
    <p class="project-meta">${project.timeline}</p>
    <p>${project.description}</p>
    <ul class="tag-list">${techTags}</ul>
    <div class="project-links">
      <a href="${project.demoUrl}" aria-label="View live demo of ${project.title}">Live Demo ↗</a>
      <a href="${project.codeUrl}" aria-label="View source code of ${project.title}">Source ↗</a>
    </div>
  `;

  projectGrid.appendChild(article);
});

document.getElementById("year").textContent = new Date().getFullYear();
