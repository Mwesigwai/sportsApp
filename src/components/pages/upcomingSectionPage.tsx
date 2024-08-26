import React from "react";
import SeeAllGameCard from "../cards/seeAllGameCard";
import SectionDetailPageContent from "./pageComponents/sectionDetailPageContent";
import SectionDetailPageHeader from "./pageComponents/sectionDetailPageHeader";
import SectionDetailPage from "./sectionDetailPage";

const UpcomingSectionPage:React.FC = ()=>{
    return(
        <SectionDetailPage
            sectionHeader = {
                <SectionDetailPageHeader
                    filterIconUrl="/images/filter.png"
                    backIconUrl="/images/back.png"
                    sectionTitle="Upcoming"
                />
            }

            mainContent ={
                <SectionDetailPageContent 
                    content={
                        [<SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />,]                    }
                />
            }
        />
    )
}

export default UpcomingSectionPage;