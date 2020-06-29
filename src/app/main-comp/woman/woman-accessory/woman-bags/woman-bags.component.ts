import {Component, OnDestroy, OnInit} from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Product} from "../../../../shared/interfaces";
import {Subscription} from "rxjs";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-bags',
  templateUrl: './woman-bags.component.html',
  styleUrls: ['./woman-bags.component.scss']
})
export class WomanBagsComponent implements OnInit, OnDestroy {

  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanBags: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanBags = this.womanService.getWomanBags();

    });
    this.womanBags = this.womanService.getWomanBags();
  }

  addWomanBagsToCart(womanBag) {
    this.cartService.cart.push(womanBag);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
