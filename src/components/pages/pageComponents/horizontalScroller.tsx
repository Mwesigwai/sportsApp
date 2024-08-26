import React from "react"

interface ScrollComponents {
    components: React.ReactNode[];
}

const HorizontalScroller: React.FC<ScrollComponents> = ({ components }) => {
    return (
        <div className="horizontalScroller">{
            components.map((component) =>
                <div key={1}>{component}</div>
            )}
        </div>
    )
}
export default HorizontalScroller;