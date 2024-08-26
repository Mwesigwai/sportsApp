import React from "react";

interface UpdatesPageHeaderProps {
    addIconUrl: string;
    filterIconUrl: string;
}

const UpdatesPageHeader: React.FC<UpdatesPageHeaderProps> = ({ addIconUrl, filterIconUrl }) => {
    return (
        <div className="updatesMainHeader">
            <img src="/images/back.png" alt="" />
            <div className="updatesPageHeader">
                <img src={addIconUrl} alt="" />
                <span className="pageTitle">updates</span>
                <img src={filterIconUrl} alt="" />
            </div>
        </div>
    )
}

export default UpdatesPageHeader;