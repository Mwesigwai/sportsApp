import Scores from "./cardComponents/scores";
import TeamLogos from "./cardComponents/teamLogos"
import TeamsHeader from "../teamsHeader"
import LiveCardFooter from "./cardComponents/liveCardFooter";
import React from "react";

type liveCardProp ={
    favIconUrl:string
}

const LiveFootballCard:React.FC<liveCardProp> = ({favIconUrl})=>{
    return(
        <div className="primaryFootballCard liveCard">
            <TeamsHeader/>
            <TeamLogos />
            <Scores />
            <LiveCardFooter favIcon={favIconUrl}/>
        </div>
    )
}

export default LiveFootballCard;