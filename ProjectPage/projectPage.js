const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

window.onload = () => {
    
    //Para que me devuelva la query param que he agragado a la homepage en el enlace de Simplify ?leon=simplify
    function _getProjectTitleOnURL() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });
          console.log(params)
          return params.title.toLowerCase();
    }
    //Para obtener los datos del servidor
   async function _getProjectData () {
      const response = await  fetch(SERVER_URL)
      const projects = await response.json()
      const projectTitle = _getProjectTitleOnURL()
      const [projectToShow] = projects.filter(project => project.name.toLowerCase() === projectTitle)
      console.log(projectToShow)
      _updateProjectData(projectToShow)
    }
    // Actualiza los datos y los imprime en pantalla
   function _updateProjectData(projectToShow) {
        const projectTitleHeader = document.querySelector(".projectSimplify")
        /*const projectSubtitle = document.querySelector(“.subtitle”)
        const projectData = document.querySelector(“.simplifyDateSpam”)
        const paragraph = document.querySelector(“.paragraphs”)
        const logoBlur = document.querySelector(“.projectLogoBlur”)
        const logo = document.querySelector(“.projectLogo”)*/
        projectTitleHeader.textContent = `${projectToShow.name} Felipe`
        /*projectSubtitle.textContent = projectToShow.description
        projectData.textContent = projectToShow.completed_on
        paragraph.textContent = projectToShow.content
        logoBlur.src = projectToShow.image
        logo.src = projectToShow.image*/
    };
    _getProjectData();
};