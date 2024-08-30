import React from "react";

type playgroundCardPropObj = {
    imgUrl: string;
    name: string;
}

type playgroundCardProps = {
    data: playgroundCardPropObj;
}

const PlaygroundCard: React.FC<playgroundCardProps> = ({ data }) => {

    return (
        <div className="horizontalRectangleSmall">
            <div className="image">
                <img src={data.imgUrl} alt="" />
                <span style={{color:"#bababa", fontSize:11, fontFamily:"sans-serif"}}>{data.name}</span>
            </div>
          
        </div>
    )
}

export default PlaygroundCard;