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
            <TodayHorizontalDataUpdates games={[{id:'u', team1:{name:'vipers', imgUrl:'/images/me.jpeg'}, team2:{name:'bulls', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one', scores:{team1Score:1, team2Score:2}}]} />
            <UpcomingHorizontalDataUpdates games={[{id:'hole', team1:{name:'mas fc', imgUrl:'/images/me.jpeg'}, team2:{name:'bulls', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one', scores:{team1Score:1, team2Score:2}}]} />
            <LiveGameHorizontalDataUpdates games={[{id:'hole', team1:{name:'team fc', imgUrl:'/images/me.jpeg'}, team2:{name:'star fc', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one', scores:{team1Score:1, team2Score:2}}]} />            
            <RecentGameHorizontalDataUpdates games={[{id:'hole', team1:{name:'team fc', imgUrl:'/images/me.jpeg'}, team2:{name:'star fc', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one', scores:{team1Score:1, team2Score:2}}]} />            
        </div>
    )
}

export default DefaultMainPageData;