import TeamLogos from "./cardComponents/teamLogos";
import TeamsHeader from "../teamsHeader";
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";
import React from "react";

const TodayFootballCard:React.FC = () => {
    return (
        <div className="primaryFootballCard todayCard">
            <TeamsHeader/>
            <TeamLogos/>
            <PrimaryCardFooter showDate = {false} showTime = {true} favIcon="/images/star.png"/>
        </div>
    )
}

export default TodayFootballCard;