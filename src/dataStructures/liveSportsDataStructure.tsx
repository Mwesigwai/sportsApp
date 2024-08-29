import { team } from "../components/pages/pageComponents/horizontalScroller";

export type liveSportsData = {
    id: string;
    team1: team;
    team2: team;
    category: string;
    scores: { team1Score: number, team2Score: number }
}