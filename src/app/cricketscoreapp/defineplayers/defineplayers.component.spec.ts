import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineplayersComponent } from './defineplayers.component';

describe('DefineplayersComponent', () => {
  let component: DefineplayersComponent;
  let fixture: ComponentFixture<DefineplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
