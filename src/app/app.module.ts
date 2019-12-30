import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DisplayComponent } from './display/display.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { addproductReducer } from './reducers/blockchain.reducer';

@NgModule({
   declarations: [
      AppComponent,
      BlockchainComponent,
      DisplayComponent
   ],
   imports: [
      BrowserModule,
      StoreModule.forRoot({blockchain: addproductReducer}),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
