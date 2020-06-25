import { Injectable } from '@angular/core';
import {Cart, Product} from "../shared/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }



  product: Product[];
  public allSum;
  public cart: Cart[] = [];


  cartChanged = new Subject<Cart[]>();

  getCart() {
    return this.cart.slice();
  }

  deleteCartItem(index: number) {
    this.cart.splice(index, 1);
    this.cartChanged.next(this.cart.slice());
  }

}
