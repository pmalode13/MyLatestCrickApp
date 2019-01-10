import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommentryService } from '../Services/commentry.service';
import { Players1Service } from '../Services/players1.service';
import { Player2Service } from '../Services/player2.service';
import { MatchService } from '../Services/match.service';
import { TotalScoreWicketService } from '../Services/total-score-wicket.service';
import { BatsmanDetailService } from '../Services/batsman-detail.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  t1;
  t2;
  ballnum = 1;
  numofovers = 0;
  index = 0;
  @ViewChild('possiblerun') possiblerunInTS: ElementRef;

  @ViewChild('wickettype') wickettypeInTS: ElementRef;


  @ViewChild('ball') ballInTS: ElementRef;

  @ViewChild('over') overInTS: ElementRef;

  @ViewChild('commentry') commentryInTS: ElementRef;

  @ViewChild('firstBatsman') firstBatsmanInTs: ElementRef;

  fieldingTeam;
  playt1;
  playt2;
  tosswin;
  desci;
  totalovers;
  totalRuns = 0;
  totalWicket = 0;
  
  battingPlayers;
  public showType: boolean = false;

  public showNewBowler: boolean = true;

  public showCatchBy: boolean = false;
  public showHead: boolean = false;
  private txtBall: boolean = true;
  private txtOver: boolean = true;
  public firstBatsman:boolean=true;
  public newBatsman:boolean=true;


  constructor(private comm: CommentryService,
    private team1: Players1Service,
    private team2: Player2Service,
    private match: MatchService,
    private totalRunsWick: TotalScoreWicketService,
    private  batsmandetail:BatsmanDetailService) {
    this.playt1 = match.maTch[0].team1;
    this.playt2 = match.maTch[0].team2;
    this.tosswin = match.maTch[0].toss;
    this.desci = match.maTch[0].decision;
    this.totalovers = match.maTch[0].overs;


    if (this.playt1 == this.tosswin && this.desci == "Bowling") {
      this.fieldingTeam = team1.playears1;
      this.battingPlayers=team2.playears2;
    }
    else if (this.playt1 == this.tosswin && this.desci == "Batting") {
      this.fieldingTeam = team2.playears2;
      this.battingPlayers=team1.playears1;
    }

    else if (this.playt2 == this.tosswin && this.desci == "Bowling") {
      this.fieldingTeam = team2.playears2;
      this.battingPlayers=team1.playears1;
    }

    else if (this.playt2 == this.tosswin && this.desci == "Batting") {
      this.fieldingTeam = team1.playears1;
      this.battingPlayers=team1.playears1;
    }
  }

  ngOnInit() {
  }

  onSelectOfPossibility() {
    this.newBatsman=false;
    
    this.t1 = ((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    if (this.t1 == 'Wicket') {

      // console.log("In Possibility");
      this.showType = !this.showType;

    }
    else {
      this.showType = false;
      this.totalRuns += +((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    }

  }

  onSelectOfWicket() {
    this.t2 = ((<HTMLInputElement>this.wickettypeInTS.nativeElement).value);
    if (this.t2 == 'Catch') {
      this.showCatchBy = !this.showCatchBy;
    }
    else {
      this.showCatchBy = false;
    }
  }

  onAddScoreClick() {
    this.ballnum++;
  

    if (this.ballnum > 6) {
      this.ballnum = 1;
      this.numofovers++;
      this.showNewBowler = true;
    }

    else {
      this.showNewBowler = false;
    }

    if(this.numofovers == this.match.maTch[0].overs && this.ballnum==1)
    {
      this.firstBatsman=true;
      this.newBatsman=true;
    }
    
    else
    {
      this.firstBatsman=false;
      this.newBatsman=false;
    }


    if (this.t1 == 'Wicket') 
    {
      this.totalWicket++;
      this.newBatsman=true;
    }
    
   


    this.showType = false;
    this.showCatchBy = false;
    this.comm.addCommentry((<HTMLInputElement>this.ballInTS.nativeElement).value,
      (<HTMLInputElement>this.overInTS.nativeElement).value,
      (<HTMLInputElement>this.commentryInTS.nativeElement).value);

   
   
    

    if (this.numofovers == this.match.maTch[0].overs && this.fieldingTeam == this.team1.playears1) {
      this.fieldingTeam = this.team2.playears2;
      this.battingPlayers=this.team1.playears1;
      this.showHead = true;
      this.ballnum = 1;
      this.numofovers = 0;
      this.totalWicket = 0;
     
    }

    else if (this.numofovers == this.totalovers && this.fieldingTeam == this.team2.playears2) {
      this.fieldingTeam = this.team1.playears1;
      this.battingPlayers=this.team2.playears2;
      this.ballnum = 1;
      
      this.numofovers = 0;
      this.totalWicket = 0;
         }
    this.totalRunsWick.addTotalRunsWickets(this.totalRuns, this.totalWicket);

        // this.batsmandetail.batsman1D(  (<HTMLInputElement>this.firstBatsmanInTs.nativeElement).value,(<HTMLInputElement>this.possiblerunInTS.nativeElement).value);

        
  }
}