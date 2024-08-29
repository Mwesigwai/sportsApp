import { liveSportsData } from "../../../dataStructures/liveSportsDataStructure";
import { recentSportsData } from "../../../dataStructures/recentSportsDataStructure";
import { sportGroundsData } from "../../../dataStructures/sportGroundsDataStructure";
import { sportImportantFolksData } from "../../../dataStructures/sportImportantFolks";
import { sportParticipantsData } from "../../../dataStructures/sportParticipantsDataStructure";
import { todayData } from "../../../dataStructures/todaySportsDataStructure";
import { upcomingSportsData } from "../../../dataStructures/upcomingSportsDataStructure";


export type dataFromApi = {
    today:todayData[]
    upcoming: upcomingSportsData[];
    live:liveSportsData[]
    recent:recentSportsData[]
    sportParticipants:sportParticipantsData[]
    sportGrounds:sportGroundsData[]
    sportImportantFolks:sportImportantFolksData[]
}


