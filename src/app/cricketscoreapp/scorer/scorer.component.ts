import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DecisionService } from 'src/app/Services/decision.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/Models/Match';
import { MatchService } from 'src/app/Services/match.service';
import { Players1Service } from 'src/app/Services/players1.service';
import { Player2Service } from 'src/app/Services/player2.service';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent implements OnInit {

  dname;
  t1;
  t2;
  match:Match;
  
  @ViewChild('team1') team1InTS: ElementRef;
  @ViewChild('team2') team2InTS: ElementRef;

  @ViewChild('toss') tossInTS: ElementRef;
  @ViewChild('decision') decisionInTS: ElementRef;


  @ViewChild('overs') oversInTS: ElementRef;
  private btnDisable: boolean = true;
  constructor(  
    deci:DecisionService,
    private router:Router,
    private route :ActivatedRoute,
    private mat:MatchService,
    )
     {
    this.dname=deci.desc;
  
   }
   
  ngOnInit() {
  }
  
  onSelectTeam1()
  {
    this.t1=((<HTMLInputElement>this.team1InTS.nativeElement).value);
  }
  onSelectTeam2()
  {
    //this.t1=((<HTMLInputElement>this.team1InTS.nativeElement).value);
    this.t2=((<HTMLInputElement>this.team2InTS.nativeElement).value);
    this.btnDisable = false;
  }
  onDefineTeam()
  {
    //this.matches.push(new Match())
    this.mat.addMatch(
      (<HTMLInputElement>this.team1InTS.nativeElement).value,
    (<HTMLInputElement>this.team2InTS.nativeElement).value,
    (<HTMLInputElement>this.tossInTS.nativeElement).value,
    (<HTMLInputElement>this.decisionInTS.nativeElement).value,
    (<HTMLInputElement>this.oversInTS.nativeElement).value
    
    );
    
    this.router.navigate(['/defplayer'],{relativeTo:this.route});
    
   
      
  }
}
