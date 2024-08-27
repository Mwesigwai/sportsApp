import React from "react";

type scoresProps = {
    team1Score:number;
    team2Score:number;
}

const Scores:React.FC<scoresProps> = ({team1Score, team2Score})=>{
    return(
        <div className="scoresDiv">
            <div className="team1Score">{team1Score}</div>
            <div className="team2Score">{team2Score}</div>
        </div>
    )
}

export default Scores;