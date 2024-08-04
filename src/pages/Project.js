import {useParams} from 'react-router-dom';

import {projects} from "../helpers/ProjectsList";

import ButGitHub from "../components/buttonGitHub/ButGitHub";

function Project() {
    const {id} = useParams();
    const project = projects[id];

    return(
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1" alt={project.title} >{project.title}</h1>
                    <img src={project.imgBig} alt="" className="project-details__cover"/>
                        <div className="project-details__desc">
                            <p>Skills:{project.skills}</p>
                        </div>
                    {project.gitHubLink &&(
                        <ButGitHub link="https://github.com/k1s1k?tab=repositories"/>)}
                </div>
            </div>
        </main>
    );
}

export default Project;

