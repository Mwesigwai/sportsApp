
import TeamLogos from "./cardComponents/teamLogos";
import TeamsHeader from "../teamsHeader";
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";
import React from "react";

type upcomingFootballCardPropObj ={
    team1Name:string;
    team2Name:string;
    team1ImgUrl:string;
    team2ImgUrl:string;
    time:string;
    date:string;
}

type upcomingFootballCardProps = {
    upcomingCardDataObj:upcomingFootballCardPropObj;
}

const UpcomingFootballCard:React.FC<upcomingFootballCardProps> = ({upcomingCardDataObj})=>{
    return(
        <div className="upcomingCard primaryFootballCard">
            <TeamsHeader team1Name={upcomingCardDataObj.team1Name} team2Name={upcomingCardDataObj.team2Name}/>
            <TeamLogos team1ImgUrl={upcomingCardDataObj.team1ImgUrl} team2ImgUrl={upcomingCardDataObj.team2ImgUrl}/>
            <PrimaryCardFooter showDate ={true} date={upcomingCardDataObj.date} showTime ={true} time={upcomingCardDataObj.time} favIcon="/images/star.png" />
        </div>
    )
}

export default UpcomingFootballCard;