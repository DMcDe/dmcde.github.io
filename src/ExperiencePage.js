import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const ExperiencePage = () => {

    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState([]);

    // On page load, get project list from local database
    useEffect(() => {

        const getProjects = async () => {
            const data = await fetch('data.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
            const projs = await data.json();

            if (filters.length > 0) {
                projs.filter((proj) => {
                    filters.forEach((tag) => {
                        proj.tags.includes(tag);
                    })
                })
            }
            setProjects(projs.projects);
        }

        getProjects();
    }, [filters]);

    return(
        <main>
            <h1 className = "PageTitle">Projects and Experience</h1>
            <div className = "ProjectGrid">
                {projects.map((proj) => (
                    <ProjectCard projectDetails={proj} key={proj.id}/>
                ))}
            </div>
        </main>
    );
}

export default ExperiencePage;