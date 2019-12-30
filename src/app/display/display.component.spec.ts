/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DisplayComponent } from './display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  const storeMock = {
    select() {
        return of([{ name: 'water', price: '120000' },
        { name: 'coil', price: '85000' }]);
    }
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule],
        providers: [
          { provide: Store, useValue: storeMock }, 
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
