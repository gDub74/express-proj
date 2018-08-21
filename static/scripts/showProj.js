
project = (function () {
    
    // cache dom
    const featureTitle = document.querySelector('#featureTitle');
    const featureInfo = document.querySelector('#description');
    const featureImage = document.querySelector('#featureImage');
    const titleImage = document.querySelector('#titleImage');
    const ghLink = document.querySelector('#githubLink');
    const leftArrow = document.querySelector('#leftArrow');
    const rightArrow = document.querySelector('#rightArrow');
    let techs = document.querySelector('#techs');
    let projectIndex = 0;
    let projects;
    const loadJSON = fetch('projects.json');
    loadJSON.then(els => els.json())
        .then(projectsData => projects = projectsData)
        .catch(err => console.log('oops, something went wrong, ', err));
    
    
    // set state
    const showProject = (index) => {
        const proj = projects[index];
        const titleImageSrc = proj.titleImage;
        const featureImgSrc = proj.mainImage;
        const codeLink = proj.codeHref;
        featureTitle.innerHTML = proj.name;
        featureInfo.innerHTML = proj.description;
        techs.innerHTML = proj.techs;
        titleImage.setAttribute('src', titleImageSrc);
        featureImage.setAttribute('src', featureImgSrc);
        ghLink.setAttribute('href', codeLink);
    }
    
    let setProjIndex = (direction) => {
        if (direction === 'right') {
            projectIndex = projectIndex === (projects.length - 1) ? 0 : ++projectIndex;
        } else {
            projectIndex = projectIndex === 0 ? (projects.length - 1) : --projectIndex;
        }
    }
    
    
    // bind events
    leftArrow.addEventListener('click', () => {
        setProjIndex('left');
        showProject(projectIndex);
    });
    
    rightArrow.addEventListener('click', () => {
        setProjIndex('right');
        showProject(projectIndex);
    });

})()
