import React from "react";

interface SectionDetailPageProps {
    filterIconUrl:string;
    sectionTitle:string;
    backIconUrl:string;
}

const SectionDetailPageHeader:React.FC<SectionDetailPageProps> = ({filterIconUrl, backIconUrl, sectionTitle})=>{
    return(
        <div className="sectionPageHeader">
            <img src={backIconUrl} alt="" />
            <div className="pageHeading">{sectionTitle}</div>
            <img src={filterIconUrl} alt="" className=""/>
        </div>
    )
}

export default SectionDetailPageHeader;