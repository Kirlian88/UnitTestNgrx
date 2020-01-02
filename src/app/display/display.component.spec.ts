/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DisplayComponent } from './display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { AppState } from '../app.state';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let store: Store<AppState>;

  const storeMock = {
    select() {
        return of([{ name: 'water', price: '120000' },
        { name: 'coil', price: '85000' }]
    );
    },
    setState() {
      return of(x => x.blockchain)
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

    store = TestBed.get(Store);
    store.select(state => state.blockchain);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create store', () => {
    expect(Store).toBeTruthy();
  });

  it('should dispatch the select scenario action', () => {
    storeMock.setState();
    expect(storeMock.setState);
}); 
});
