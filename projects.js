document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "hermedoc",
      title: "Hermedoc",
      description:
        "Progressive Web App functioning as a chatbot tailored for secure document interaction and retrieval by leveraging Llama-3 for local processing and Retrieval-Augmented Generation.",
      image: "images/hermedoc.png",
      techStack: ["React", "Flask", "Python", "Ollama"],
      link: "https://github.com/jasonschen3/hermedoc",
    },
    {
      id: "otek",
      title: "OTEK Reporting System",
      description:
        "Web app with authentication that manages projects, staff, daily logs, expenses, and other data, featuring an automatic notification system and a supplemental mobile app.",
      image: "images/otek.png",
      techStack: [
        "React",
        "Node.js",
        "SQL",
        "React Native",
        "AWS",
        "Vim",
        "PostgreSQL",
      ],
      link: "https://github.com/jasonschen3/otek-reporting",
    },
    {
      id: "illuminate",
      title: "Illuminate AI",
      description:
        "Web app that generates graphs or data based on specific queries from a user-uploaded CSV file.",
      image: "images/illuminate.png",
      techStack: ["React", "Node.js", "SQL", "OpenAI API", "PostgreSQL"],
      link: "https://devfolio.co/projects/illuminateai-0b89",
    },
    {
      id: "stockbot",
      title: "StockBot",
      description:
        "Web app that provides a user with a comprehensive report on a company's finances and analyzes viability of investment.",
      image: "images/stockbot.png",
      techStack: [
        "Java",
        "HTML/CSS",
        "JS",
        "Spring Boot",
        "Financial Modeling Prep API",
      ],
      link: "https://devpost.com/software/stock-clock",
    },
    {
      id: "prisoner-escape",
      title: "Prisoner Escape",
      description:
        "Game designed for the Game Boy Advance inspired by World's Hardest Game.",
      image: "images/prisoner-escape.png",
      techStack: ["C", "Docker"],
      link: "https://github.com/jasonschen3/prisoner-escape/",
    },
    {
      id: "political-bias",
      title: "Political Bias Detector",
      description:
        "Research project that classified the political ideology of Reddit headlines and later, entire news articles.",
      image: "images/political-bias.png",
      techStack: ["Node.js", "Python", "Flask"],
      link: "https://symposium.foragerone.com/2022-dmrsef/presentations/36573/",
    },
    {
      id: "get-gt",
      title: "Get GT",
      description: "Fun spinoff of GetMIT (which is a spinoff of 2048).",
      image: "images/get-gt.png",
      techStack: ["HTML/CSS", "Figma", "JS"],
      link: "https://github.com/jasonschen3/get-gt",
    },
  ];

  const container = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectCard = `
        <div class="card mb-5" id="${project.id}">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="${project.image}" class="img-fluid rounded-start" alt="${project.title}" />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h4 class="card-title">${project.title}</h4>
                <p class="card-text">${project.description}</p>
                <div class="tech-used">
                  ${project.techStack
                    .map(
                      (tech) =>
                        `<button type="button" class="btn btn-info">${tech}</button>`
                    )
                    .join("")}
                </div>
                <br />
                <a href="${project.link}" class="btn btn-dark" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>`;
    container.innerHTML += projectCard;
  });
});
