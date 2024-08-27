import React from "react"
import TodayFootballCard from "../../cards/todayFootballCard";
import UpcomingFootballCard from "../../cards/upcomingFootballCard";
import { dataFromApi } from "./dataFromApi";

export type team ={
    name:string;
    imgUrl: string
}

interface ScrollComponentsData {
    data: dataFromApi[];
    displayCard:React.FC<any>;
}

const HorizontalScroller: React.FC<ScrollComponentsData> = ({ data, displayCard: card }) => {
    switch (card) {
        case TodayFootballCard:
            return (
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <TodayFootballCard 
                            todayCardData={{
                                team1Name:game.team1.name,
                                team1ImgUrl:game.team1.imgUrl,
                                team2Name:game.team2.name,
                                team2ImgUrl:game.team2.imgUrl,
                                time:game.time}}
                            key={game.id}
                        />
                    )}
                </div>
            )
        
        case UpcomingFootballCard:
            return(
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <UpcomingFootballCard 
                            upcomingCardDataObj={{
                                team1Name:game.team1.name,
                                team1ImgUrl:game.team1.imgUrl,
                                team2Name:game.team2.name,
                                team2ImgUrl:game.team2.imgUrl,
                                time:game.time,
                                date:game.date
                            }}

                            key={game.id}
                        />
                    )}
                </div>
            )
        default:
            break;
    }
    
}
export default HorizontalScroller;