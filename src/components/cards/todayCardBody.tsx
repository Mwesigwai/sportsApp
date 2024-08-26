import React from "react";

const TodayCardBody: React.FC = () => {
    return (
        <div className="todayCardBody">
            <div className="stadiumAndBrodcast">
                <div className="stadiumDetails">
                    <span className="stadium">mabati thief stadium</span>
                    <span className="viewOnMap">view on map</span>
                </div>
                <span className="brodcast">bukedde tv</span>
            </div>
            <div className="todayCardMetaDetails2">
                <span className="">bukedea district</span>
                <span className="">11:00am</span>
                <span className="entry">free</span>
            </div>
        </div>
    )
}

export default TodayCardBody;