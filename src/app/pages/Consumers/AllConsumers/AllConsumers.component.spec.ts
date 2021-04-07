/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllConsumersComponent } from './AllConsumers.component';

describe('AllConsumersComponent', () => {
  let component: AllConsumersComponent;
  let fixture: ComponentFixture<AllConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
