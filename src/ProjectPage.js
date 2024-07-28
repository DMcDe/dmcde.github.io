import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const {projid} = useParams();
    const [project, setProject] = useState();

    useEffect(() => {
        const getProject = async () => {
            const data = await fetch('../data.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
            const projs = await data.json();
            const projects = projs.projects;
            const proj = projects.find(proj => (proj.id).toString() === projid);

            setProject(proj);
        }

        getProject();
    }, [projid]);

    
    return (
        <main>
            {project && <>
                <h1 className="PageTitle">{project.title}</h1>

                <h2 className="PageSubtitle">{project.subtitle}</h2>

                <div className="project-image-1">
                    <img src={require(`${project.img1_src}`)} alt = 'Primary' />
                </div>
                <div className="main-text">
                    <p>{project.description}</p>
                </div>

                <div>
                    {project.tags}
                </div>
                {/* <div>{(project.tags).map(tag => (<Tag tagText={tag} key={tag}/>))}</div> */}
            </>}
            {!project && <>
                <p>Project details loading, thank you for your patience.</p>
            </>}
            
        </main>
    );
}

export default ProjectPage;