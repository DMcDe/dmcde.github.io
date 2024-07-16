import { useContext } from "react";
import { ProjectContext } from "./ExperiencePage";

const Tag = ({tagText}) => {
    const {filters, setFilters} = useContext(ProjectContext);

    return(
        <div className = {filters.includes(tagText) ? "tag-clicked" : "tag"} onClick = {(e) => {
            if (filters.includes(tagText)) {
                setFilters(filters.filter(filt => filt !== tagText));
            } else {
                setFilters([...filters, tagText]);
            }

            // Stop propagation so the project page isn't loaded
            e.stopPropagation();
        }}>{tagText}</div>
    );
}

export default Tag;