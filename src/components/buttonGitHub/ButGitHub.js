import gitHubIcon from "../footer/img/icons/gitHub-black.svg";
import "./style.css"

function ButGitHub({link}) {
    return (
        <a href={link} className="btn-outline">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </a>
    );
}

export default ButGitHub;