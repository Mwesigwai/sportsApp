import React from "react";
import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import PlayerCard from "../../cards/PlayerCard";

const GameParticipantsHorizontalDisplay: React.FC = () => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="players" />
            <HorizontalScroller displayCard={PlayerCard} />
        </>
    )
}

export default GameParticipantsHorizontalDisplay;