import React from "react";

type teamsHeaderProps = {
    team1Name: string;
    team2Name: string;
}

const TeamsHeader:React.FC<teamsHeaderProps> = ({team1Name, team2Name}) => {
    return (
        <div className="teamsHeader">
            <div className="teamName">{team1Name}</div>
            <div className="teamName">{team2Name}</div>
        </div>
    )
}

export default TeamsHeader;