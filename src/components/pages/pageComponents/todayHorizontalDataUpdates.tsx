import HorizontalScrollLabel from "./horizontalScrollLabel";
import HorizontalScroller from "./horizontalScroller";
import TodayFootballCard from "../../cards/todayFootballCard";
import { horizontalScrollerUpdateProps } from "./horizontalScrollerUpdateProps";

const TodayHorizontalDataUpdates: React.FC<horizontalScrollerUpdateProps> = ({data}) => {
    return (
        <>
            <HorizontalScrollLabel sectionTitle="today" />
            <HorizontalScroller displayCard={TodayFootballCard} dataFromAPi={data}/>
        </>
    )
}

export default TodayHorizontalDataUpdates;