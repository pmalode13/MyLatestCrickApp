import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Players1Service } from 'src/app/Services/players1.service';
import { Player2Service } from 'src/app/Services/player2.service';
import { MatchService } from 'src/app/Services/match.service';

@Component({
  selector: 'app-defineplayers',
  templateUrl: './defineplayers.component.html',
  styleUrls: ['./defineplayers.component.css']
})
export class DefineplayersComponent implements OnInit {

  pname;
  ind=1;
  ind2=1;
  playername:Array<string> =[];
  playername2:Array<string>=[];
  
  @ViewChild('addplayer') addplayerInTS: ElementRef;
  @ViewChild('addplayer2') addplayer2InTS: ElementRef;
  constructor(private router:Router,private route :ActivatedRoute,public matchserv:MatchService,
    private players1:Players1Service ,private players2:Player2Service) {
    
   }

  ngOnInit() {
  }

  onStartMatchClicked()
  {
    this.router.navigate(['/summary'],{relativeTo:this.route}); 
  }

  onAddPlayerClick()
  {
    
    ++this.ind;
    if(this.ind<=12)
    {
    this.playername.push((<HTMLInputElement>this.addplayerInTS.nativeElement).value); 
    this.addplayerInTS.nativeElement.value="";
  }
  }

  onAddPlayerClick2()
  {
    ++this.ind2;
    if(this.ind2<=12)
    {
    this.playername2.push((<HTMLInputElement>this.addplayer2InTS.nativeElement).value);
    this.addplayer2InTS.nativeElement.value="";
    }
  }
  onClickOfDelete2(index)
  {
    --this.ind2;
    this.playername2.pop();
    let l=this.playername2.indexOf;
    console.log(l);
  }

  onClickOfDelete()
  {
    --this.ind;
    this.playername.pop();
  }
  onFirstFinalTeam()
  {
    this.players1.addplayers1(this.playername);
  }
  onSecondtFinalTeam()
  {
    this.players2.addplayers2(this.playername2);
  }
}
