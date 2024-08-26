import React from "react";

interface UpdateCardHeaderProps {
    userImgUrl: string;
}

const UpdateCardHeader: React.FC<UpdateCardHeaderProps> = ({ userImgUrl }) => {
    return (
        <div className="updateCardHeader">
            <div className="postUserImage">
                <img src={userImgUrl} alt="" />
            </div>
            <div className="postMetaDetails">
                <div className="userName">@mwesigwa</div>
                <div className="postDateAndTime">
                    <div className="postDate">12/10/2022</div>
                    <div className="postTime">11:12 am</div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCardHeader;