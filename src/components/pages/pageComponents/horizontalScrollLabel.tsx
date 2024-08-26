import React from "react";

interface HorizontalScrollerProps{
    sectionTitle:string;
}

const HorizontalScrollLabel:React.FC<HorizontalScrollerProps> =({sectionTitle})=>{
    return(
        <div className="horizontalScrollLabel">
            <span className="sectionTitle">{sectionTitle}</span>
            <span className="prompt">see all</span>
        </div>
    )
}

export default HorizontalScrollLabel;