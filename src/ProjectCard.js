import Tag from "./Tag";

const ProjectCard = ({projectDetails}) => {
    const thumbnail = require(`${projectDetails.thumbnail_src}`);

    return(
    <div className = "project-card">
        <div className = "card-photo">
            <img className = "thumbnail" src= {thumbnail} alt="Project Thumbnail" /> 
        </div>
        <div className = "card-title">{projectDetails.title}</div>
        <div className = "card-subtitle">{projectDetails.subtitle}</div>
        <div className = "card-tags">
            {(projectDetails.tags).map(tag => (<Tag tagText={tag} key={tag}/>))}
        </div>
    </div>
    );
}

export default ProjectCard;