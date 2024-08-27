import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import { dataFromApi } from "./dataFromApi";
import LiveFootballCard from "../../cards/liveFootballCard";

type liveGameHorizontalDataUpdatesProps ={
    games:dataFromApi[];
}

const LiveGameHorizontalDataUpdates: React.FC<liveGameHorizontalDataUpdatesProps> = ({games}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="live" />
            <HorizontalScroller data={games} displayCard={LiveFootballCard} />
        </>
    )
}

export default LiveGameHorizontalDataUpdates;