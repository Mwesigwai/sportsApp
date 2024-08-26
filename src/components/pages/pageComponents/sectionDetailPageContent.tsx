import React from "react";

interface SectionDetailPageContentProps {
    content: React.ReactNode[];
}

const SectionDetailPageContent: React.FC<SectionDetailPageContentProps> = ({ content }) => {
    return (
        <div className="sectionContent">
            {content.map(element => (
                <div key={'k'} className="sectionItem">
                    {element}
                </div>
            ))}
        </div>
    )
}

export default SectionDetailPageContent;