import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import RecentFootballCard from "../../cards/recentFootballCard";

const RecentGameHorizontalDataUpdates: React.FC = () => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="recent" />
            <HorizontalScroller displayCard={RecentFootballCard} />
        </>
    )
}

export default RecentGameHorizontalDataUpdates;