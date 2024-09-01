
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";

const DefaultToournamentCard = () => {
    return (
        <div className="defaultTournamentCard primaryFootballCard">
            <div className="tournamentTitle"></div>
            <PrimaryCardFooter favIcon="/images/star.png" showDate = {false} showTime = {false}/>
        </div>
    )
}

export default DefaultToournamentCard;