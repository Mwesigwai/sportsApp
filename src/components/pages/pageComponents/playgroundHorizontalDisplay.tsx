import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";
import PlaygroundCard from "../../cards/playgroundCard";

const PlayGroundHorizontalDisplay: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="play grounds" />
            <HorizontalScroller dataFromAPi={data} displayCard={PlaygroundCard} />
        </>
    )
}

export default PlayGroundHorizontalDisplay;