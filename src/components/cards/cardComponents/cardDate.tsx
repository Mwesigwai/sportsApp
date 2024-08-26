import { Props } from "../../pages/pageComponents/mainAppHeader"

const CardDate = (dateIconUrl:Props)=>{
    return(
        <div className="cardDate">
            <img className="cardIcon" src={dateIconUrl.imageUrl} alt="" />
            <div className="dateDetails" style={{fontSize:9}}>11/10/2024</div>
        </div>
    )
}

export default CardDate;