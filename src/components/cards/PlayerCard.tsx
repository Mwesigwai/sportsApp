import React from "react";
import { team } from "../pages/pageComponents/horizontalScroller";

type playerCardPropObj = {
    id:string;
    imgUrl:string;
    name:string;
    age:number;
    team:team;
    role:string;
}

type playerCardProps = {
    data: playerCardPropObj;
}

const PlayerCard:React.FC<playerCardProps> = ({data}) => {

    return (
        <div className="horizontalRectangleSmall">
            <div className="image">
                <img src = {data.imgUrl} alt=""/>

                <div className="participantInfo">
                    <div className="participantNameAndAge">
                        <span className="participantName">{data.name}</span>
                        <span className="age">{data.age}</span>
                    </div>


                    <div className="teamLogoAndName">
                        <img src={data.team.imgUrl} alt="" />
                        <span className="participantTeam">{data.team.name}</span>
                        <span className="role">defender</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;