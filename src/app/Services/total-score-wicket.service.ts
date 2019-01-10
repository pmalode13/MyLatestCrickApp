import { Injectable } from '@angular/core';
import { TotalScoreWicket } from '../Models/TotalScoreWicket';

@Injectable({
  providedIn: 'root'
})
export class TotalScoreWicketService {

  TotalRuns:any;
  TotalWickets:any;
  
  addTotalRunsWickets(runs:any,wicket:any) {
    
    this.TotalRuns=runs;
    this.TotalWickets=wicket;
    console.log(this.TotalRuns);
    console.log(this.TotalWickets);

   }
   constructor(){}


}
