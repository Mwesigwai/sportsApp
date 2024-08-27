import React from "react";
import TodayHorizontalDataUpdates from "./pageComponents/todayHorizontalDataUpdates";


type defaultPageMainDataProps = {
    selectedItem:string;
}

const DefaultMainPageData: React.FC<defaultPageMainDataProps> = ({selectedItem}) => {
    return (
        <div className="oneOnOneDisplayPage">
            <TodayHorizontalDataUpdates games={[{id:'u', team1:{name:'vipers', imgUrl:'/images/me.jpeg'}, team2:{name:'bulls', imgUrl:'/images/me.jpeg'}, time:'11:45am', category:'one on one'}]} />
        </div>
    )
}

export default DefaultMainPageData;