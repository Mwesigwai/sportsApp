import React from "react";

interface PageProp {
    pageContent: React.ReactNode;
}


const MainPageContentView:React.FC<PageProp> = ({pageContent}) => {
    return (
        <div className="mainDisplay">{pageContent}</div>
    )
}
export default MainPageContentView;