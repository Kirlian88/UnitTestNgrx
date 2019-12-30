import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DisplayComponent } from './display/display.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { addproductReducer } from './reducers/blockchain.reducer';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  

  var prueba: any[];

  const storeMock = {
    select() {
        return of([{ name: 'water', price: '120000' },
          { name: 'coil', price: '85000' }]);
    }
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, BlockchainComponent, DisplayComponent
      ],
      imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
    ],
    providers: [
      { provide: Store, useValue: storeMock}, 
    ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NGRXUnitTestPOC'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NGRX UnitTest POC');
  });

});
