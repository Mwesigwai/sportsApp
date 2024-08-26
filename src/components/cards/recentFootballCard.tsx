import Scores from "./cardComponents/scores"
import TeamLogos from "./cardComponents/teamLogos"
import TeamsHeader from "../teamsHeader"
import PrimaryCardFooter from "./cardComponents/primaryCardFooter"

const RecentFootballCard = ()=>{
    return(
        <div className="recentCard primaryFootballCard">
            <TeamsHeader/>
            <TeamLogos/>
            <Scores/>
            <PrimaryCardFooter showDate = {true} showTime ={true} favIcon="/images/star.png"/>
        </div>
    )
}

export default RecentFootballCard;