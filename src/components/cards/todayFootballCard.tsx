import TeamLogos from "./cardComponents/teamLogos";
import TeamsHeader from "../teamsHeader";
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";
import React from "react";

export type todayFootballPropsObj = {
    team1Name:string;
    team2Name:string;
    team1ImgUrl:string;
    team2ImgUrl:string;
    time:string;
}

type todayFootballCardProps = {
    todayCardData: todayFootballPropsObj;
}

const TodayFootballCard:React.FC<todayFootballCardProps> = ({todayCardData}) => {
    return (
        <div className="primaryFootballCard todayCard">
            <TeamsHeader team1Name={todayCardData.team1Name} team2Name={todayCardData.team2Name}/>
            <TeamLogos team1ImgUrl={todayCardData.team1ImgUrl} team2ImgUrl={todayCardData.team2ImgUrl}/>
            <PrimaryCardFooter time={todayCardData.time} showDate = {false} showTime = {true} favIcon="/images/star.png"/>
        </div>
    )
}

export default TodayFootballCard;