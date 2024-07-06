import { useContext } from "react";
import { FilterContext } from "./ExperiencePage";

const Tag = ({tagText}) => {
    const {filters, setFilters} = useContext(FilterContext);
    return(
        <div className = "tag" onClick = {() => {
            if (filters.includes(tagText)) {
                setFilters(filters.filter(filt => filt !== tagText));
            } else {
                setFilters([...filters, tagText]);
            }
        }}>{tagText}</div>
    );
}

export default Tag;