const ProjectCard = ({projectName}) => {
    return(
    <div className = "project-card">
        <div className = "card-photo"></div>
        <div className = "card-title">{projectName}</div>
        <div className = "card-desc">Project Description</div>
    </div>
    );
}

export default ProjectCard;