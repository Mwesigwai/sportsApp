import React, { useEffect, useState } from "react";
import TodayHorizontalDataUpdates from "./pageComponents/todayHorizontalDataUpdates";
import UpcomingHorizontalDataUpdates from "./pageComponents/upcomingHorizontalDataUpdates";
import LiveGameHorizontalDataUpdates from "./pageComponents/liveGameHorizontalDataUpdates";
import RecentGameHorizontalDataUpdates from "./pageComponents/recentGamesHorizontalDataUpdates";
import { dataFromApi } from "./pageComponents/dataFromApi";
import GameParticipantsHorizontalDisplay from "./pageComponents/gameParticipantsHorizontalDisplay";
import PlayGroundHorizontalDisplay from "./pageComponents/playgroundHorizontalDisplay";


type defaultPageMainDataProps = {
    selectedItem: string;
}

const DefaultMainPageData: React.FC<defaultPageMainDataProps> = ({ selectedItem }) => {
    const [data, setData] = useState<dataFromApi | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('mockSportsData.json');
            const data: dataFromApi = await response.json();
            setData(data);
        }
        fetchData();
    }, [selectedItem])

    return (
        <div className="oneOnOneDisplayPage">
            <TodayHorizontalDataUpdates data={data} />
            <UpcomingHorizontalDataUpdates data={data} />
            <LiveGameHorizontalDataUpdates data={data} />
            <RecentGameHorizontalDataUpdates data={data} />
            <GameParticipantsHorizontalDisplay data={data}/>
            <PlayGroundHorizontalDisplay data={data} />
        </div>
    )
}

export default DefaultMainPageData;