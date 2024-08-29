import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import LiveFootballCard from "../../cards/liveFootballCard";

const LiveGameHorizontalDataUpdates: React.FC = () => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="live" />
            <HorizontalScroller displayCard={LiveFootballCard} />
        </>
    )
}

export default LiveGameHorizontalDataUpdates;