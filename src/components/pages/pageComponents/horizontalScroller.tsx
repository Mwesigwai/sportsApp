import React from "react"
import TodayFootballCard from "../../cards/todayFootballCard";

type team ={
    name:string;
    imgUrl: string
}

export type dataFromApi = {
    id:string;
    team1:team;
    team2:team;
    time:string;
    category:string;
}

interface ScrollComponentsData {
    data: dataFromApi[];
}

const HorizontalScroller: React.FC<ScrollComponentsData> = ({ data }) => {
    return (
        <div className="horizontalScroller">{
            data.map((game) =>
                <TodayFootballCard 
                    key={game.id} 
                    todayCardData= {{
                        team1Name:game.team1.name,
                        team2Name:game.team2.name,
                        team1ImgUrl:game.team1.imgUrl,
                        team2ImgUrl:game.team2.imgUrl,
                        time:game.time
                    }}
                />
            )}
        </div>
    )
}
export default HorizontalScroller;