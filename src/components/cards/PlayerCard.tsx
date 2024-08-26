
const PlayerCard = () => {
    return (
        <div className="horizontalRectangleSmall">
            <div className="image">
                <img src="/images/me.jpeg" alt=""/>

                <div className="participantInfo">
                    <div className="participantNameAndAge">
                        <span className="participantName">isaac mwesigwa</span>
                        <span className="age">29 yrs</span>
                    </div>


                    <div className="teamLogoAndName">
                        <img src="/images/me.jpeg" alt="" />
                        <span className="participantTeam">bulls fc</span>
                        <span className="role">defender</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;