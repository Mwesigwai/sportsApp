import React from "react";
import TodayHorizontalDataUpdates from "./pageComponents/todayHorizontalDataUpdates";
import UpcomingHorizontalDataUpdates from "./pageComponents/upcomingHorizontalDataUpdates";


type defaultPageMainDataProps = {
    selectedItem:string;
}

const DefaultMainPageData: React.FC<defaultPageMainDataProps> = ({selectedItem}) => {
    return (
        <div className="oneOnOneDisplayPage">
            <TodayHorizontalDataUpdates games={[{id:'u', team1:{name:'vipers', imgUrl:'/images/me.jpeg'}, team2:{name:'bulls', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one'}]} />
            <UpcomingHorizontalDataUpdates games={[{id:'hole', team1:{name:'mas fc', imgUrl:'/images/me.jpeg'}, team2:{name:'bulls', imgUrl:'/images/me.jpeg'}, time:'11:45am', date:'11/10/2000', category:'one on one'}]} />
        </div>
    )
}

export default DefaultMainPageData;