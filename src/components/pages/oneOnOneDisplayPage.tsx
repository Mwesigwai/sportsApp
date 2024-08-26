import React from "react";
import CircularDisplay from "../cards/cardComponents/circularDisplay";
import LiveFootballCard from "../cards/liveFootballCard";
import PlayerCard from "../cards/PlayerCard";
import RecentFootballCard from "../cards/recentFootballCard";
import TodayFootballCard from "../cards/todayFootballCard";
import UpcomingFootballCard from "../cards/upcomingFootballCard";
import HorizontalScroller from "./pageComponents/horizontalScroller";
import HorizontalScrollLabel from "./pageComponents/horizontalScrollLabel";


type oneOnOneDisplayPageProps = {
    selectedItem:string;
}

const OneOnOneDisplayPage: React.FC<oneOnOneDisplayPageProps> = ({selectedItem}) => {
    return (
        <div className="oneOnOneDisplayPage">
            <HorizontalScrollLabel sectionTitle="today" />
            <HorizontalScroller components={[<TodayFootballCard key={1} />, <TodayFootballCard key={1} />, <TodayFootballCard key={1} />, <TodayFootballCard key={1} />,]} />

            <HorizontalScrollLabel sectionTitle="live" />
            <HorizontalScroller components={[<LiveFootballCard favIconUrl="/images/star.png" key={1} />, <LiveFootballCard favIconUrl="/images/star.png" key={1} />, <LiveFootballCard favIconUrl="/images/star.png" key={1} />, <LiveFootballCard favIconUrl="/images/star.png" key={1} />,]} />

            <HorizontalScrollLabel sectionTitle="upcoming" />
            <HorizontalScroller components={[<UpcomingFootballCard key={1} />, <UpcomingFootballCard key={1} />, <UpcomingFootballCard key={1} />, <UpcomingFootballCard key={1} />,]} />

            <HorizontalScrollLabel sectionTitle="recent" />
            <HorizontalScroller components={[<RecentFootballCard key={1} />, <RecentFootballCard key={1} />, <RecentFootballCard key={1} />, <RecentFootballCard key={1} />,]} />

            <HorizontalScrollLabel sectionTitle={selectedItem + " grounds"} />
            <HorizontalScroller components={[<CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />,]} />

            <HorizontalScrollLabel sectionTitle={selectedItem + " players"} />
            <HorizontalScroller components={[<PlayerCard key={1} />, <PlayerCard key={1} />, <PlayerCard key={1} />, <PlayerCard key={1} />,]} />

            <HorizontalScrollLabel sectionTitle={selectedItem + " teams"} />
            <HorizontalScroller components={[<CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />,]} />

            <HorizontalScrollLabel sectionTitle={selectedItem + " sponsors"} />
            <HorizontalScroller components={[<CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />, <CircularDisplay key={1} />,]} />

        </div>
    )
}

export default OneOnOneDisplayPage;