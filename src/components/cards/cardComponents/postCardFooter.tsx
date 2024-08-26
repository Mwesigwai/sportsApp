import React from "react";

interface PostCardFooterProps {
    likeIconUrl:string;
}

const PostCardFooter:React.FC<PostCardFooterProps> =({likeIconUrl}) =>{
    return(
        <div className="postCardFooter">
            <div className="likeSection">
                <img src={likeIconUrl} alt="" />
                <div className="likesCount"></div>
            </div>
            <span className="comments">comments</span>
        </div>
    )
}

export default PostCardFooter;