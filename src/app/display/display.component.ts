import { Blockchain } from './../blockchain/blockchain.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  public products: Observable<any[]>;
  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.blockchain);
   }

  ngOnInit() {
    this.products;
  }

}
