import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import { dataFromApi } from "./dataFromApi";
import TodayFootballCard from "../../cards/todayFootballCard";

type todayHorizontalDataUpdatesProps ={
    games:dataFromApi[];
}

const TodayHorizontalDataUpdates: React.FC<todayHorizontalDataUpdatesProps> = ({games}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="today" />
            <HorizontalScroller data={games} card={TodayFootballCard} />
        </>
    )
}

export default TodayHorizontalDataUpdates;