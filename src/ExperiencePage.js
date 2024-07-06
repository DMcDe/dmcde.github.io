import ProjectCard from "./ProjectCard";
import { useState, useEffect, createContext } from "react";

export const FilterContext = createContext({});

const ExperiencePage = () => {

    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState([]);

    // On page load, get project list from local database
    useEffect(() => {

        const getProjects = async () => {
            const data = await fetch('data.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
            const projs = await data.json();
            let projList = projs.projects;

            if (filters.length > 0) {

                projList = (projList).filter(
                    (proj) => {
                        let hasAll = true;
                        filters.forEach((tag) => {
                            if (!proj.tags.includes(tag)) {
                                hasAll = false;
                            }
                        });

                        return hasAll;

                    } //End arrow function
                );
            } // End if
            setProjects(projList);
        }

        getProjects();
    }, [filters]);

    return(
        <FilterContext.Provider value = {{filters, setFilters}}>
            <h1 className = "PageTitle">Projects and Experience</h1>
            <div className = "ProjectGrid">
                {projects.map((proj) => (
                    <ProjectCard projectDetails={proj} key={proj.id}/>
                ))}
            </div>
        </FilterContext.Provider>
    );
}

export default ExperiencePage;