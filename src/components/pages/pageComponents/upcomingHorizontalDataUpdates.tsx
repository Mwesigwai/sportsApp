import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import UpcomingFootballCard from "../../cards/upcomingFootballCard";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";

const UpcomingHorizontalDataUpdates: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="upcoming" />
            <HorizontalScroller displayCard={UpcomingFootballCard} dataFromAPi={data}/>
        </>
    )
}

export default UpcomingHorizontalDataUpdates;