import React from "react";

type favIconUrl = {
    favIcon: string;
}
const LiveCardFooter: React.FC<favIconUrl> = ({ favIcon }) => {
    return (
        <div className="primaryCardFooter">
            <img src={favIcon} alt="" className="cardIcon fav" />
            <span className="live">live</span>
            <div className="moreDetails">details</div>
        </div>
    )
}

export default LiveCardFooter;