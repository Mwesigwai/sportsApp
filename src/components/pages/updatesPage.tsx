import React from "react";
import UpdatesPageHeader from "./pageComponents/updatesPageHeader";
import UpdatesPageTabNav from "./pageComponents/updatesPageTabNav";
import UpdatesFeed from "./pageComponents/updatesFeed";

const UpdatesPage: React.FC = () => {
    return (
        <div className="updatesPage">
            <UpdatesPageHeader addIconUrl="/images/add.png"filterIconUrl="/images/filter.png"/>
            <UpdatesPageTabNav options={['sports', 'businesses', 'sponsors', 'news']}/>
            <UpdatesFeed/>
        </div>
    )
}

export default UpdatesPage;