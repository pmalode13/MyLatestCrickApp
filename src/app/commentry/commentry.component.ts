import { Component, OnInit } from '@angular/core';
import { CommentryService } from '../Services/commentry.service';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css']
})
export class CommentryComponent implements OnInit {

 // cmm;
 cmm;
  constructor( comm:CommentryService) {
    //this.cmm=comm.coMMentry;
    //console.log(this.cmm[0]);
    this.cmm=comm.coMMentry.reverse();
  
    console.log(this.cmm);
   }
   
  ngOnInit() {
  }

}
