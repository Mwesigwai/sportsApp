import React from "react";
import UpdatePostCard from "../../cards/updatePostCard";

const UpdatesFeed: React.FC<{}> = () => {
    return (
        <div className="updatesFeed">
            <UpdatePostCard />
            <UpdatePostCard />
            <UpdatePostCard />
            <UpdatePostCard />
            <UpdatePostCard />
            <UpdatePostCard />
        </div>
    )
}

export default UpdatesFeed;