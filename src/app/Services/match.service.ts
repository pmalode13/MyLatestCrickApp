import { Injectable } from '@angular/core';
import { Match } from '../Models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  maTch:Array<Match> =[];
  constructor() { }



  addMatch(team1:string,team2:string,toss:string,decision:string,overs:any)
  {
    this.maTch.push(new Match(team1,team2,toss,decision,overs));
    
  }
}
