import React from "react";
import SectionDetailPage from "./sectionDetailPage";
import SeeAllGameCard from "../cards/seeAllGameCard";
import SectionDetailPageContent from "./pageComponents/sectionDetailPageContent";
import SectionDetailPageHeader from "./pageComponents/sectionDetailPageHeader";

const RecentGameSectionPage: React.FC = () => {
    return (
        <SectionDetailPage
            sectionHeader={
                <SectionDetailPageHeader
                    filterIconUrl="/images/filter.png"
                    backIconUrl="/images/back.png"
                    sectionTitle="Recent"
                />
            }

            mainContent={
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
                        />, <SeeAllGameCard
                            key={1}
                            addScores={true}
                            addCardFooter={true}
                            withDate={true}
                            withTime={true}
                        />,]
                    }
                />
            }
        />
    )
}

export default RecentGameSectionPage;