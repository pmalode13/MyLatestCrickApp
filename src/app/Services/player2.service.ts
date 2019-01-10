import { Injectable } from '@angular/core';
import { Player2 } from '../Models/Player2';

@Injectable({
  providedIn: 'root'
})
export class Player2Service {
  playears2:Array<string> =[];

  
addplayers2(players2:Array<string>)
{
  this.playears2=players2;
  //console.log(this.playears2);
}
  constructor() { }
}
