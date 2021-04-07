/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllRidersComponent } from './AllRiders.component';

describe('AllRidersComponent', () => {
  let component: AllRidersComponent;
  let fixture: ComponentFixture<AllRidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
