import React from "react";
import UpdateCardHeader from "./cardComponents/updateCardHeader";
import PostCardBody from "./cardComponents/postCardBody";
import PostCardFooter from "./cardComponents/postCardFooter";

const UpdatePostCard: React.FC<{}> = () => {
    return (
        <div className="updatePostCard">
            <UpdateCardHeader userImgUrl="/sportsApp/images/me.jpeg" />
            <PostCardBody postText="james was standard output may be used as a return value in the we need a way to 
                james was standard output may be used as a return value in the we need a way to 
                james was standard output may be used as a return value in the we need a way to 
                james was standard output may be used as a return value in the we need a way to 
                james was standard output may be used as a return value in the we need a way to 
                james was standard output may be used as a return value in the we need a way to "
                postImgUrl="/sportsApp/images/me.jpeg" />
            <PostCardFooter likeIconUrl="/sportsApp/images/like.png" />
        </div>

    )
}

export default UpdatePostCard;