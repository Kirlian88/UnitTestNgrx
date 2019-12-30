import { Blockchain } from './../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const ADD_product = 'ADD_product';

export function addproductReducer(state: Blockchain[] = [], action) {
  switch (action.type) {
    case ADD_product:
        return [...state, action.payload];
    default:
        return state;
    }
}
