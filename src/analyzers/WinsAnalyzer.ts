import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalyzer implements Analyzer {
  constructor(private team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}