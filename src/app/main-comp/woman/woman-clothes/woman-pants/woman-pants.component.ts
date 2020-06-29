import {Component, OnDestroy, OnInit} from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-pants',
  templateUrl: './woman-pants.component.html',
  styleUrls: ['./woman-pants.component.scss']
})
export class WomanPantsComponent implements OnInit, OnDestroy {

  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanPants: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanPants = this.womanService.getWomanPants();

    });
    this.womanPants = this.womanService.getWomanPants();
  }

  addWomanPantsToCart(womanPant) {
    this.cartService.cart.push(womanPant);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
