import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import { dataFromApi } from "./dataFromApi";
import RecentFootballCard from "../../cards/recentFootballCard";

type recentGameHorizontalDataUpdatesProps ={
    games:dataFromApi[];
}

const RecentGameHorizontalDataUpdates: React.FC<recentGameHorizontalDataUpdatesProps> = ({games}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="recent" />
            <HorizontalScroller data={games} displayCard={RecentFootballCard} />
        </>
    )
}

export default RecentGameHorizontalDataUpdates;