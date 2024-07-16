import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectPage = () => {
    const {projid} = useParams();

    const [project, setProject] = useState([]);

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
            <h1>{project.title}</h1>
        </main>
    );
}

export default ProjectPage;