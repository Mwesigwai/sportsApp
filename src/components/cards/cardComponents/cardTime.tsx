
interface CardTimeProps{
    timeIcon:string;
}

const CardTime = (timeIcon:CardTimeProps)=>{
    return(
        <div className="cardTime">
            <img src={timeIcon.timeIcon} alt="" className="timeIcon" />
            <div className="time"style={{fontSize:9}}>11:45pm</div>
            <div className="district"style={{fontSize:9}}>jinja budondo</div>
        </div>
    )
}

export default CardTime;