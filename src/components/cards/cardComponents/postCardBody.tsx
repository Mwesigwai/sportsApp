import React from "react";

interface PostCardBodyProps {
    postText: string;
    postImgUrl?: string;
}

const PostCardBody: React.FC<PostCardBodyProps> = ({ postText, postImgUrl = null }) => {
    return (
        <div className="postCardBody">
            <div className="postText">{postText}</div>
            <div className="postImage">
                {postImgUrl && <img src={postImgUrl} alt="" />}
            </div>
        </div>
    )
}

export default PostCardBody;