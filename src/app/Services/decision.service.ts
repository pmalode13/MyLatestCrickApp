import { Injectable } from '@angular/core';
import { Decision } from '../Models/Decision';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  desc=[new Decision('Batting'),
  new Decision('Bowling')];
  constructor() { 
    
  }
}
