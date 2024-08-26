import React from "react";

interface UpdatesPageTabNavProps{
    options:string[];
}

const UpdatesPageTabNav:React.FC<UpdatesPageTabNavProps> = ({options})=>{
    return(
        <div className="updatePageTabNav horizontalScroller">
            {options.map(option => (
                <div className="tabNavOption" key={option}>{option}</div>
            ))}
        </div>
    )
}

export default UpdatesPageTabNav;