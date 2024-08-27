import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import { dataFromApi } from "./dataFromApi";
import UpcomingFootballCard from "../../cards/upcomingFootballCard";

type todayHorizontalDataUpdatesProps ={
    games:dataFromApi[];
}

const UpcomingHorizontalDataUpdates: React.FC<todayHorizontalDataUpdatesProps> = ({games}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="upcoming" />
            <HorizontalScroller data={games} displayCard={UpcomingFootballCard} />
        </>
    )
}

export default UpcomingHorizontalDataUpdates;