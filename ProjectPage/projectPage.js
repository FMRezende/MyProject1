const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

window.onload = () => {
    
    function _getProjectTitleOnURL() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });
          console.log(params)
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
        const projectTitleHeader = document.querySelector(".projectSimplify")
        projectTitleHeader.textContent = `${projectToShow.name} Felipe`
    
    };
    _getProjectData();
};