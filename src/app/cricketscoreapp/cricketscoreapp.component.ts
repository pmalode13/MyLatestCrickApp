import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cricketscoreapp',
  templateUrl: './cricketscoreapp.component.html',
  styleUrls: ['./cricketscoreapp.component.css']
})
export class CricketscoreappComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute) { }

  ngOnInit() {
  }
  onNewMatchClick()
  {
    this.router.navigate(['Admin'],{relativeTo:this.route});
  }
}
