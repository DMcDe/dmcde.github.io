import CardTag from "./CardTag";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({projectDetails}) => {
    const thumbnail = require(`${projectDetails.thumbnail_src}`);

    const nav = useNavigate();
    const navProject = () => nav(`${projectDetails.id}`);

    return(
    <div className = "project-card" onClick = {navProject}>
        <div className = "card-photo">
            <img className = "thumbnail" src= {thumbnail} alt="Project Thumbnail" /> 
        </div>
        <div className = "card-title">{projectDetails.title}</div>
        <div className = "card-subtitle">{projectDetails.subtitle}</div>
        <div className = "card-tags">
            {(projectDetails.tags).map(tag => (<CardTag tagText={tag} key={tag}/>))}
        </div>
    </div>
    );
}

export default ProjectCard;