import React from "react";
import TeamLogosBig from "./cardComponents/teamLogosBig";
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";

type addScores = {
    addScores: boolean;
    addCardFooter: boolean;
    withDate: boolean;
    withTime: boolean;
}

const SeeAllGameCard: React.FC<addScores> = ({ addScores, addCardFooter, withDate, withTime }) => {
    return (
        <div className="seeAllGameCard">
            <TeamLogosBig addScores={addScores} />
            {addCardFooter ? <PrimaryCardFooter
                showDate={withDate}
                showTime={withTime}
                favIcon="/images/star.png" /> : null
            }
        </div>
    )
}

export default SeeAllGameCard;