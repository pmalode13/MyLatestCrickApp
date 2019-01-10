import { Injectable } from '@angular/core';
import { Players1 } from '../Models/Players1';

@Injectable({
  providedIn: 'root'
})
export class Players1Service {


  playears1:Array<string> =[];

addplayers1(players1:Array<string>)
{
  this.playears1=players1;
  
}
  constructor() { }
}
