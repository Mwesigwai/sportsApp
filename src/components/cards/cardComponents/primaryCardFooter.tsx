import React from "react";

type favIconUrl = {
    favIcon: string;
    showDate: boolean;
    showTime: boolean;
    time? : string;
    date?:string;
}
const PrimaryCardFooter: React.FC<favIconUrl> = ({ favIcon, showDate, showTime, time, date }) => {
    return (
        <div className="primaryCardFooter">
            <img src={favIcon} alt="" className="cardIcon fav" />
            {showDate ? <span className="timeDate">{date}</span> : null}            
            {showTime ? <span className="timeDate">{time}</span> : null}
            <div className="moreDetails">details</div>
        </div>
    )
}

export default PrimaryCardFooter;