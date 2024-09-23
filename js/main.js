// Sticky Navbar

// AOS.init();

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle Nav
function toggleMenu() {
  if (window.innerWidth <= 800) {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
  }
}


// update current year
window.onload = function() {
  const currentYearEl = document.querySelector("#currentYear");
  if(currentYearEl) {currentYearEl.innerText = new Date().getFullYear();}
}


const projects = [
  {
    imgSrc: "images/new images/learnvista.png",
    projectLink: "https://learn-vista-one.vercel.app/",
    githubLink: "https://github.com/ATHULEA123/LearnVista.git",
    projectName: "Learn Vista",
    hasView: true
  },
  {
    imgSrc: "images/new images/figma design.png",
    projectLink: "https://www.figma.com/design/0ty0QzEBWyn5aYQgbhBQ09/WITH-ART?node-id=0-1&m=dev&t=EhZocQQJ5iVzOfmH-1",
    githubLink: "",
    projectName: "WithArt",
    hasView: true
  },
  {
    imgSrc: "images/new images/medical static site.png",
    projectLink: "https://responsive-webpage-ochre.vercel.app/",
    githubLink: "https://github.com/ATHULEA123/static-website.git",
    projectName: "MedicalGenic",
    hasView: true
  },
  {
    imgSrc: "images/new images/contactlist page image.png",
    projectLink: "",
    githubLink: "https://github.com/ATHULEA123/Contactlist-project.git",
    projectName: "Connect Ease",
    hasView: false
  },
  {
    imgSrc: "images/new images/weatherapp.png",
    projectLink: "https://weatherapp-nine-mu.vercel.app/",
    githubLink: "https://github.com/ATHULEA123/weatherapp.git",
    projectName: "Weather App",
    hasView: true
  },
  {
    imgSrc: "images/new images/decee.png",
    projectLink: "https://fabulous-cascaron-43d790.netlify.app/",
    githubLink: "https://github.com/ATHULEA123/DEECEE.git",
    projectName: "Deecee",
    hasView: true
  },
  {
    imgSrc: "images/new images/javascript page design.png",
    projectLink: "",
    githubLink: "https://github.com/ATHULEA123/javascript-project.git",
    projectName: "Employee Management",
    hasView: false
  },
  {
    imgSrc: "images/new images/blog project page.png",
    projectLink: "",
    githubLink: "https://github.com/ATHULEA123/BLOG-PAGE.git",
    projectName: "BLOG",
    hasView: false
  },
  {
    imgSrc: "images/new images/bootstrapform.png" ,
    projectLink: "https://bootstrap-project-mocha.vercel.app/",
    githubLink: "https://github.com/ATHULEA123/bootstrap-project.git",
    projectName: "BioData Form",
    hasView: true
  },
  {
    imgSrc: "images/new images/dynamicform.png",
    projectLink: "",
    githubLink: "https://github.com/ATHULEA123/bootstrap-project.git",
    projectName: "ContactForm",
    hasView: false
  },
  {
    imgSrc: "images/new images/E-commerce.png",
    projectLink: "",
    githubLink: "https://github.com/ATHULEA123/E-commerce-frontend.git",
    projectName: "Shopper",
    hasView: false
  },
  {
    imgSrc: "images/new images/jayji.png",
    projectLink: "https://jay-ji.vercel.app/",
    githubLink: "https://github.com/ATHULEA123/Jay-ji.git",
    projectName: "jay ji",
    hasView: true
  },

  // Add more project objects here...
];

const projectContainer = document.getElementById('project-container');

projects.forEach(project => {
  const projectCard = `
    <div class="projects">
      <img src="${project.imgSrc}" alt="${project.projectName}">
      ${project.hasView ? `<a href="${project.projectLink}" class="viewproject">View</a>` : ''}
      <a href="${project.githubLink}" class="viewgit">Git Hub</a>
      <div class="project-name">${project.projectName}</div>
    </div>
  `;
  projectContainer.innerHTML += projectCard;
});

