import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import UpcomingFootballCard from "../../cards/upcomingFootballCard";

const UpcomingHorizontalDataUpdates: React.FC = () => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="upcoming" />
            <HorizontalScroller displayCard={UpcomingFootballCard} />
        </>
    )
}

export default UpcomingHorizontalDataUpdates;