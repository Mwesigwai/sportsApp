import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import PlayerCard from "../../cards/PlayerCard";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";

const GameParticipantsHorizontalDisplay: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="players" />
            <HorizontalScroller dataFromAPi={data} displayCard={PlayerCard} />
        </>
    )
}

export default GameParticipantsHorizontalDisplay;