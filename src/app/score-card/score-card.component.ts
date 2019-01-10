import { Component, OnInit } from '@angular/core';
import { Players1Service } from '../Services/players1.service';
import { Player2Service } from '../Services/player2.service';
import { MatchService } from '../Services/match.service';
import { TotalScoreWicketService } from '../Services/total-score-wicket.service';
import { BatsmanDetailService } from '../Services/batsman-detail.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
playt1;
playt2;
tosswin;
desci;
totalovers;
battingTeam;
battingTeamName;
bowlingTeamName;
bowlingTeam;
totalrun;
totalwick;
batsname1;
runsof1;
    constructor(private team1:Players1Service,private team2:Player2Service,private match:MatchService,totalRunsWick:TotalScoreWicketService,batsman1:BatsmanDetailService)
   {
    this.playt1 = match.maTch[0].team1;
    this.playt2 = match.maTch[0].team2;
    this.tosswin = match.maTch[0].toss;
    this.desci = match.maTch[0].decision;
    this.totalovers = match.maTch[0].overs;
    this.totalwick=totalRunsWick.TotalWickets;
    this.totalrun=totalRunsWick.TotalRuns;
   // this.batsname1=batsman1.batsman1;
   // this.runsof1=batsman1.runs1;
   

    if (this.playt1 == this.tosswin && this.desci == "Bowling") {
      this.battingTeam = team2.playears2;
      this.bowlingTeam=team1.playears1;
      this.battingTeamName=this.playt2;
      this.bowlingTeamName=this.playt1;
    }
    else if (this.playt1 == this.tosswin && this.desci == "Batting") {
      this.battingTeam = team1.playears1;
      this.bowlingTeam=team2.playears2;
      this.battingTeamName=this.playt1;
      this.bowlingTeamName=this.playt2;
    }

    else if (this.playt2 == this.tosswin && this.desci == "Bowling") {
      this.battingTeam = team1.playears1;
      this.bowlingTeam=team2.playears2;
      this.battingTeamName=this.playt1;
      this.bowlingTeamName=this.playt2;
    }

    else if (this.playt2 == this.tosswin && this.desci == "Batting") {
      this.battingTeam = team2.playears2;
      this.bowlingTeam=team1.playears1;
      this.battingTeamName=this.playt2;
      this.bowlingTeamName=this.playt1;
    }
   }

  ngOnInit() {
  }

}
