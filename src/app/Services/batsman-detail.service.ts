import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatsmanDetailService {
batsman1:string;
batsman2:string;
runs1:any;
runs2:any;
ball1:any;
ball2:any;
  constructor() { }
  batsman1D(batsman1:string,runs1:any)
  {
    this.batsman1=batsman1;
    this.runs1=this.runs1+runs1;
    console.log(runs1);
    console.log(this.batsman1);
  }
}
