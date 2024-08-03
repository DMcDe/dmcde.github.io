const DescriptionParagraph = ({paragraph}) => {
    const insertedHTML = {__html: paragraph};
    return (
        <p className="main-text" dangerouslySetInnerHTML={insertedHTML}></p>
    )
};

export default DescriptionParagraph;