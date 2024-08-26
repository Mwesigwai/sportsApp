import React from "react";

type addScores = {
    addScores:boolean;
}
const TeamLogosBig:React.FC<addScores> = ({addScores}) => {
    return (
        <div className="teamLogosBig">
            <div className="loggoGroup" style={addScores? {height:103}:{height:80}}>
                <div className="name"></div>
                <div className="team1Big"></div>
                {addScores? <div className="team1Score" style={{ height:20}}></div> : null}
            </div>

            <div className="vurses">vs</div>

            <div className="loggoGroup" style={addScores? {height:103}:{height:80}}>
                <div className="name"></div>
                <div className="team2Big"></div>
                {addScores? <div className="team1Score" style={{ height:20}}></div> : null}
            </div>

        </div>
    )
}

export default TeamLogosBig;