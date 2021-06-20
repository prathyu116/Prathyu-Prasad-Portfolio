import React from 'react'
import './Projects.css'
const ProjectCard = ({projectName,projectDescription,imageUrl,projectUrl,gitHubUrl}) => {
    return (
        <div className='project-card'>
            <div className="image-container">
                <a href={projectUrl} className="project-link">
                    <img src={imageUrl} alt="" className='project-image'/>

                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-name">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={gitHubUrl} className='project-url2'>view source code on git</a>
            </div>
            
        </div>
    )
}

export default ProjectCard
