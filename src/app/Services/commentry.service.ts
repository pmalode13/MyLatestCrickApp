import { Injectable } from '@angular/core';
import { Commentry } from '../Models/Commentry';

@Injectable({
  providedIn: 'root'
})
export class CommentryService {

  coMMentry:Array<Commentry> =[];
  constructor() { }



  addCommentry(ball:any,over:any,description:string)
  {
    this.coMMentry.push(new Commentry(ball,over,description));
    
  }
}
