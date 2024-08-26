import { Props } from "../../pages/pageComponents/mainAppHeader"

const CardLocation = (locationIconUrl:Props)=>{
    return(
        <div className="cardLocationPart">
            <img className="cardIcon" src={locationIconUrl.imageUrl} alt="" />
            <div className="locationDetails" style={{fontSize:9}}>bugembe stadium</div>
        </div>
    )
}

export default CardLocation;