import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart, Product} from "../../shared/interfaces";
import {ManService} from "../../services/man.service";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription;
  public initialValue = 0;

  cart: Cart[];


  ngOnInit() {
    this.subscribe = this.cartService.cartChanged.subscribe( () => {
      this.cart = this.cartService.getCart();
    })
    this.cart = this.cartService.getCart();
    this.getAllSum(this.cart);
  }


  onDeleteCartItem(index: number) {
    this.cartService.deleteCartItem(index);
  }

  getAllSum(cart: any) {
    cart = this.cartService.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cash,
      this.initialValue
    );
    return cart;
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
