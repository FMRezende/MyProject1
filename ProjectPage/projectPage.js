const SERVER_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

window.onload = () => {
  function _getProjectTitleOnURL() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    console.log(params);
    return params.title.toLowerCase();
  }

  async function _getProjectData () {
    const response = await  fetch(SERVER_URL)
    const projects = await response.json()
    const projectTitle = _getProjectTitleOnURL()
    const [projectToShow] = projects.filter(project => project.name.toLowerCase() === projectTitle)
    console.log(projectToShow)
    _updateProjectData(projectToShow)
  }


function _updateProjectData(projectToShow) {
    const projectTitleHeader = document.querySelector(".projectSimplify");
    const projectSubtitle = document.querySelector(".project-description");
    const projectData = document.querySelector(".date-project");
    const projectTitle = document.querySelector(".pageText");
    const image = document.querySelector(".bigImgPage");
        
    projectTitleHeader.textContent = projectToShow.name;
    projectSubtitle.textContent = projectToShow.description
    projectData.textContent = projectToShow.completed_on
    projectTitle.textContent = projectToShow.content
    image.src = projectToShow.image;
       
    };
    _getProjectData();
};


