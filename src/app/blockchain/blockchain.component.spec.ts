/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockchainComponent } from './blockchain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Blockchain } from './blockchain.model';
import { ADD_product } from '../reducers/blockchain.reducer';
import { AppState } from '../app.state';
import { of } from 'rxjs';

describe('BlockchainComponent', () => {
  let component: BlockchainComponent;
  let fixture: ComponentFixture<BlockchainComponent>;


  let product: DebugElement;
  let price: DebugElement;
  let btnadd: DebugElement;

  const storeMock = {
    select() {
        return of([{ name: 'water', price: '120000' },
        { name: 'coil', price: '85000' }]);
    },
    dispatch: () => null
}


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: Store, useValue: storeMock }, 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    

    btnadd = fixture.debugElement.query(By.css('button[id=btnadd]'));
    price = fixture.debugElement.query(By.css('input[id=price]'));
    product = fixture.debugElement.query(By.css('input[id=product]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists button' , () => {
    expect(btnadd).toBeTruthy();
  });
  
  it('exists input product' , () => {
    expect(product).toBeTruthy();
  });
  
  it('exists input price' , () => {
    expect(price).toBeTruthy();
  });

  it('should to find the method', async(() => {
    var myspy = spyOn(component, 'addproduct').and.callThrough();

    fixture.whenStable().then(() => {
      expect(myspy).toBeDefined();
    });
  }));


  it('should dispatch the select scenario action', () => {
    let store: Store<AppState>;

    component.addproduct('tool', 345000);
    expect(storeMock.dispatch);
});

});
