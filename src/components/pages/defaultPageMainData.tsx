import React from "react";
import TodayHorizontalDataUpdates from "./pageComponents/todayHorizontalDataUpdates";
import UpcomingHorizontalDataUpdates from "./pageComponents/upcomingHorizontalDataUpdates";
import LiveGameHorizontalDataUpdates from "./pageComponents/liveGameHorizontalDataUpdates";
import RecentGameHorizontalDataUpdates from "./pageComponents/recentGamesHorizontalDataUpdates";


type defaultPageMainDataProps = {
    selectedItem:string;
}

const DefaultMainPageData: React.FC<defaultPageMainDataProps> = ({selectedItem}) => {
    return (
        <div className="oneOnOneDisplayPage">
            <TodayHorizontalDataUpdates />
            <UpcomingHorizontalDataUpdates  />
            <LiveGameHorizontalDataUpdates  />            
            <RecentGameHorizontalDataUpdates />            
        </div>
    )
}

export default DefaultMainPageData;