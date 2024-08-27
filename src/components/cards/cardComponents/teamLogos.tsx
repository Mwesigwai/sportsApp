import React from "react";

type teamLogosProps ={
    team1ImgUrl:string;
    team2ImgUrl:string;
}

const TeamLogos:React.FC<teamLogosProps> = ({team1ImgUrl, team2ImgUrl}) => {
    return (
        <div className="teamLogos">
            <div className="team1">
                <img src= {team1ImgUrl} alt="" />
            </div>
            <div className="vurses">vs</div>
            <div className="team2">
                <img src = {team2ImgUrl} alt="" />
            </div>
        </div>
    )
}

export default TeamLogos;