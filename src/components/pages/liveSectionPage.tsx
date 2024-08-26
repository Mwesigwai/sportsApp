import React from "react";
import SectionDetailPage from "./sectionDetailPage";
import SectionDetailPageContent from "./pageComponents/sectionDetailPageContent";
import SectionDetailPageHeader from "./pageComponents/sectionDetailPageHeader";
import SeeAllGameCardForLiveGames from "../cards/seeAllGameCardForLiveGames";

const LiveSectionPage: React.FC = () => {
    return (
        <SectionDetailPage
            sectionHeader={
                <SectionDetailPageHeader
                    filterIconUrl="/images/filter.png"
                    backIconUrl="/images/back.png"
                    sectionTitle="Live"
                />
            }

            mainContent={
                <SectionDetailPageContent
                    content={
                        [<SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />, <SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />,<SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />,<SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />,<SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />,<SeeAllGameCardForLiveGames addCardFooter={true} addScores={true} key={1} />,]
                    }
                />
            }
        />
    )
}

export default LiveSectionPage;