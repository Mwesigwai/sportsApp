import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import LiveFootballCard from "../../cards/liveFootballCard";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";

const LiveGameHorizontalDataUpdates: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="live" />
            <HorizontalScroller displayCard={LiveFootballCard} dataFromAPi={data}/>
        </>
    )
}

export default LiveGameHorizontalDataUpdates;