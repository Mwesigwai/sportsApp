import React from "react";

interface SectionDetailPageProps {
    sectionHeader: React.ReactNode;
    mainContent: React.ReactNode;
}

const SectionDetailPage: React.FC<SectionDetailPageProps> = ({ sectionHeader, mainContent }) => {
    return (
        <div className="sectionDetailPage">
            {sectionHeader}
            {mainContent}
        </div>
    )
}

export default SectionDetailPage;