import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const ExperiencePage = () => {

    const [projects, setProjects] = useState([]);

    // On page load, get project list from local database
    useEffect(() => {

        const getProjects = async () => {
            const data = await fetch('data.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
            const projs = await data.json();
            setProjects(projs.projects);
        }

        getProjects();
    }, []);

    return(
        <main className = "ProjectGrid">
            {projects.map((proj) => (
                <ProjectCard projectName={proj.title} key={proj.id}/>
            ))}
        </main>
        // <main className = "ProjectGrid">    
        //     <div className = "project-card">
        //         <div className = "card-photo"></div>
        //         <div className = "card-title">Project 1</div>
        //         <div className = "card-desc">Project Description</div>
        //     </div>
        //     <div className = "project-card">Project 2</div>
        //     <div className = "project-card">Project 3</div>
        //     <div className = "project-card">Project 4</div>
        //     <div className = "project-card">Project 5</div>
        //     <div className = "project-card">Project 6</div>
        //     <div className = "project-card">Project 7</div>
        //     <div className = "project-card">Project 8</div>
        //     <div className = "project-card">Project 9</div>
        // </main>
    );
}

export default ExperiencePage;