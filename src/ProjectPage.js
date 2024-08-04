import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DescriptionParagraph from "./DescriptionParagraph";

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
                <div>
                    <h1 className="PageTitle">{project.title}</h1>
                    <h2 className="PageSubtitle">{project.subtitle}</h2>
                </div>

                <div className="Project">
                    <div className="project-description">
                        {(project.description).map(p => (<DescriptionParagraph paragraph={p} key={p}/>))}
                    </div>
                    {project.img1_src && <div className="project-photo-col">
                        <div className="project-photo">
                            {project.img1_src && <img className="rectangular-photo" src={require(`${project.img1_src}`)} alt = 'Primary' />}
                            {project.img1_cap && <p className="caption">{project.img1_cap}</p>}
                        </div>
                        <div className="project-photo">
                            {project.img2_src && <img className="rectangular-photo" src={require(`${project.img2_src}`)} alt = 'Secondary' />}
                            {project.img2_cap && <p className="caption">{project.img2_cap}</p>}
                        </div>
                    </div>}
                </div>

                <div>
                    {project.tags}
                </div>
            </>}
            {!project && <>
                <p>Project details loading, thank you for your patience.</p>
            </>}
            
        </main>
    );
}

export default ProjectPage;