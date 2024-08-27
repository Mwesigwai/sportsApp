import { team } from "./horizontalScroller";


export type dataFromApi = {
    id: string;
    team1: team;
    team2: team;
    time: string;
    date:string;
    category: string;
    scores:{team1Score:number, team2Score:number}
};
