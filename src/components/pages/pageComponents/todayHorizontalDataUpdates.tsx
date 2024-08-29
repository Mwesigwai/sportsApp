import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import TodayFootballCard from "../../cards/todayFootballCard";

const TodayHorizontalDataUpdates: React.FC = () => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="today" />
            <HorizontalScroller displayCard={TodayFootballCard} />
        </>
    )
}

export default TodayHorizontalDataUpdates;