import {Component, OnDestroy, OnInit} from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-blouses-shirts',
  templateUrl: './woman-blouses-shirts.component.html',
  styleUrls: ['./woman-blouses-shirts.component.scss']
})
export class WomanBlousesShirtsComponent implements OnInit, OnDestroy {

  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanBlouses_Shirts: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanBlouses_Shirts = this.womanService.getWomanBlouses_Shirts();

    });
    this.womanBlouses_Shirts = this.womanService.getWomanBlouses_Shirts();
  }

  addWomanBlouses_ShirtsToCart(womanBlouses_Shirt) {
    this.cartService.cart.push(womanBlouses_Shirt);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
