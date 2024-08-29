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
    dataFromAPi: dataFromApi|null;
}

const HorizontalScroller: React.FC<ScrollComponentsData> = ({ displayCard, dataFromAPi}) => {
    switch (displayCard) {
        case TodayFootballCard:
            return (
                <div className="horizontalScroller">{
                    dataFromAPi?.today.map((game) =>
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
            return (
                <div className="horizontalScroller">{
                    dataFromAPi?.upcoming.map((game) =>
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
            return (
                <div className="horizontalScroller">{
                    dataFromAPi?.live.map((game) =>
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
                    dataFromAPi?.recent.map((game) =>
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