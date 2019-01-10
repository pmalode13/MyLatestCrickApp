import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScoreCardComponent } from 'src/app/score-card/score-card.component';
import { ScorerComponent } from 'src/app/cricketscoreapp/scorer/scorer.component';
import { CommentryComponent } from 'src/app/commentry/commentry.component';
import { HeaderComponent } from './header/header.component';
import { CricketscoreappComponent } from './cricketscoreapp/cricketscoreapp.component';
import { SummaryComponent } from 'src/app/summary/summary.component';
import { DefineplayersComponent } from 'src/app/cricketscoreapp/defineplayers/defineplayers.component';

@NgModule({
  declarations: [
    AppComponent,

    ScoreCardComponent,
    ScorerComponent,
    CommentryComponent,
    HeaderComponent,
    CricketscoreappComponent,
    SummaryComponent,
    DefineplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
