import project01 from "../../img/projects/01.jpg";
import "./style.css"

function Project(props) {
    return (
        <li className="project">
            <a href="project-page.html">
                <img src={project01} className="project__img"/>
                <h3 className="project__title">Gaming streaming portal</h3>
            </a>
        </li>
    );
}

export default Project;