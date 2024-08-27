import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller, { dataFromApi } from "./horizontalScroller";

type todayHorizontalDataUpdatesProps ={
    games:dataFromApi[];
}

const TodayHorizontalDataUpdates: React.FC<todayHorizontalDataUpdatesProps> = ({games}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="today" />
            <HorizontalScroller data={games} />
        </>
    )
}

export default TodayHorizontalDataUpdates;