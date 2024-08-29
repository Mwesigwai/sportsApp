import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import RecentFootballCard from "../../cards/recentFootballCard";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";

const RecentGameHorizontalDataUpdates: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="recent" />
            <HorizontalScroller displayCard={RecentFootballCard} dataFromAPi={data}/>
        </>
    )
}

export default RecentGameHorizontalDataUpdates;