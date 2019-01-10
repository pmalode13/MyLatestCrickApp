import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute) { }

  ngOnInit() {
  }
  onAdminClick()
  {
    this.router.navigate(['home'],{relativeTo:this.route})
  }
  onScoreCardClick()
  {
    this.router.navigate(['ScoreCard'],{relativeTo:this.route})
  }
}
