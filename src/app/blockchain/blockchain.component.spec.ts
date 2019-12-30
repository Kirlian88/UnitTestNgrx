/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockchainComponent } from './blockchain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

describe('BlockchainComponent', () => {
  let component: BlockchainComponent;
  let fixture: ComponentFixture<BlockchainComponent>;

  let product: DebugElement;
  let price: DebugElement;
  let btnadd: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: Store}, 
      ],
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

});
