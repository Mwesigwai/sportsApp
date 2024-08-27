import Scores from "./cardComponents/scores"
import TeamLogos from "./cardComponents/teamLogos"
import TeamsHeader from "../teamsHeader"
import PrimaryCardFooter from "./cardComponents/primaryCardFooter"
import React from "react"

type recentFootballCardPropObj ={
    team1Name:string;
    team2Name:string;
    team1ImgUrl:string;
    team2ImgUrl:string;
    scores:{team1Score:number, team2Score:number}
}
type recentFootballCardProps = {
    gameData: recentFootballCardPropObj
}
const RecentFootballCard:React.FC<recentFootballCardProps> = ({gameData})=>{
    return(
        <div className="recentCard primaryFootballCard">
            <TeamsHeader team1Name={gameData.team1Name} team2Name={gameData.team2Name}/>
            <TeamLogos team1ImgUrl={gameData.team1ImgUrl} team2ImgUrl={gameData.team2ImgUrl}/>
            <Scores team1Score={gameData.scores.team1Score} team2Score={gameData.scores.team2Score}/>
            <PrimaryCardFooter showDate = {true} showTime ={true} favIcon="/images/star.png"/>
        </div>
    )
}

export default RecentFootballCard;