import React from "react";

type favIconUrl = {
    favIcon: string;
    showDate: boolean;
    showTime: boolean;
}
const PrimaryCardFooter: React.FC<favIconUrl> = ({ favIcon, showDate, showTime }) => {
    return (
        <div className="primaryCardFooter">
            <img src={favIcon} alt="" className="cardIcon fav" />
            {showDate ? <span className="timeDate">11/10/1010</span> : null}            
            {showTime ? <span className="timeDate">11:12 am</span> : null}
            <div className="moreDetails">details</div>
        </div>
    )
}

export default PrimaryCardFooter;