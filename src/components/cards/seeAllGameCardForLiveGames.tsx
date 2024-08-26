import React from "react";
import TeamLogosBig from "./cardComponents/teamLogosBig";
import LiveCardFooter from "./cardComponents/liveCardFooter";

type addScores = {
    addScores: boolean;
    addCardFooter: boolean;
}

const SeeAllGameCard: React.FC<addScores> = ({ addScores, addCardFooter }) => {
    return (
        <div className="seeAllGameCard">
            <TeamLogosBig addScores={addScores} />

            {addCardFooter ? <LiveCardFooter
                favIcon="/images/star.png" /> : null
            }
        </div>
    )
}

export default SeeAllGameCard;