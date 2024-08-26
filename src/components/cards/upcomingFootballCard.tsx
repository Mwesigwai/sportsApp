
import TeamLogos from "./cardComponents/teamLogos";
import TeamsHeader from "../teamsHeader";
import PrimaryCardFooter from "./cardComponents/primaryCardFooter";

const UpcomingFootballCard = ()=>{
    return(
        <div className="upcomingCard primaryFootballCard">
            <TeamsHeader/>
            <TeamLogos />
            <PrimaryCardFooter showDate ={true} showTime ={true} favIcon="/images/star.png" />
        </div>
    )
}

export default UpcomingFootballCard;