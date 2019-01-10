import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketscoreappComponent } from './cricketscoreapp.component';

describe('CricketscoreappComponent', () => {
  let component: CricketscoreappComponent;
  let fixture: ComponentFixture<CricketscoreappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketscoreappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketscoreappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
