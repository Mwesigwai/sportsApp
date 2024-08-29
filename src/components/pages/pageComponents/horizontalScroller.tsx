import React, { useEffect, useState } from "react"
import TodayFootballCard from "../../cards/todayFootballCard";
import UpcomingFootballCard from "../../cards/upcomingFootballCard";
import LiveFootballCard from "../../cards/liveFootballCard";
import RecentFootballCard from "../../cards/recentFootballCard";
import { dataFromApi } from "./dataFromApi";

export type team = {
    name: string;
    imgUrl: string
}

interface ScrollComponentsData {
    displayCard: React.ElementType;
}

const HorizontalScroller: React.FC<ScrollComponentsData> = ({ displayCard }) => {
    const [data, setData] = useState<dataFromApi[]>([]);
    let fetchData;
    
    const  fetchFromApi = (url:string) => {
        useEffect(() => {
            fetchData = async () => {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }
            fetchData().catch(e => console.log(e));
    
        }, [displayCard])
    }


    switch (displayCard) {
        case TodayFootballCard:
            fetchFromApi('todaySports.json')
            return (
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <TodayFootballCard
                            todayCardData={{
                                team1Name: game.team1.name,
                                team1ImgUrl: game.team1.imgUrl,
                                team2Name: game.team2.name,
                                team2ImgUrl: game.team2.imgUrl,
                                time: game.time
                            }}
                            key={game.id}
                        />
                    )}
                </div>
            )

        case UpcomingFootballCard:
            fetchFromApi('/upcomingSports.json')
            return (
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <UpcomingFootballCard
                            upcomingCardDataObj={{
                                team1Name: game.team1.name,
                                team1ImgUrl: game.team1.imgUrl,
                                team2Name: game.team2.name,
                                team2ImgUrl: game.team2.imgUrl,
                                time: game.time,
                                date: game.date
                            }}

                            key={game.id}
                        />
                    )}
                </div>
            )

        case LiveFootballCard:
            fetchFromApi('/liveSports.json')
            return (
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <LiveFootballCard
                            gameData={{
                                team1Name: game.team1.name,
                                team1ImgUrl: game.team1.imgUrl,
                                team2Name: game.team2.name,
                                team2ImgUrl: game.team2.imgUrl,
                                scores: game.scores
                            }}
                            favIconUrl="/images/star.png"
                            key={game.id}
                        />
                    )}
                </div>
            )

        case RecentFootballCard:
            return (
                <div className="horizontalScroller">{
                    data.map((game) =>
                        <RecentFootballCard
                            gameData={{
                                team1Name: game.team1.name,
                                team1ImgUrl: game.team1.imgUrl,
                                team2Name: game.team2.name,
                                team2ImgUrl: game.team2.imgUrl,
                                scores: game.scores
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