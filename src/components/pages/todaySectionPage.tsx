import React from "react";
import SectionDetailPage from "./sectionDetailPage";
import SectionDetailPageHeader from "./pageComponents/sectionDetailPageHeader";
import SectionDetailPageContent from "./pageComponents/sectionDetailPageContent";
import SeeAllGameCard from "../cards/seeAllGameCard";

const TodaySectionPage: React.FC = () => {
    return (
        <SectionDetailPage
            sectionHeader={
                <SectionDetailPageHeader
                    filterIconUrl="/images/filter.png"
                    backIconUrl="/images/back.png"
                    sectionTitle="Today"
                />
            }

            mainContent={
                <SectionDetailPageContent
                    content={
                        [<SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />, <SeeAllGameCard
                            key={1}
                            addScores={false}
                            addCardFooter={true}
                            withDate={false}
                            withTime={true}
                        />,]
                    }
                />
            }
        />
    )
}

export default TodaySectionPage;