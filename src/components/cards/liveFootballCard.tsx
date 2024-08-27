import Scores from "./cardComponents/scores";
import TeamLogos from "./cardComponents/teamLogos"
import TeamsHeader from "../teamsHeader"
import LiveCardFooter from "./cardComponents/liveCardFooter";
import React from "react";

type upcomingFootballCardPropObj ={
    team1Name:string;
    team2Name:string;
    team1ImgUrl:string;
    team2ImgUrl:string;
    scores:{team1Score:number, team2Score:number}
}

type liveCardProp ={
    favIconUrl:string
    gameData:upcomingFootballCardPropObj;
}

const LiveFootballCard:React.FC<liveCardProp> = ({favIconUrl, gameData})=>{
    return(
        <div className="primaryFootballCard liveCard">
            <TeamsHeader team1Name={gameData.team1Name} team2Name={gameData.team2Name}/>
            <TeamLogos team1ImgUrl={gameData.team1ImgUrl} team2ImgUrl={gameData.team2ImgUrl}/>
            <Scores {...{team1Score:gameData.scores.team1Score, team2Score:gameData.scores.team2Score}}/>
            <LiveCardFooter favIcon={favIconUrl}/>
        </div>
    )
}

export default LiveFootballCard;