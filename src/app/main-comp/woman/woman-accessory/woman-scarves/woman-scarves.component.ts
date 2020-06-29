import {Component, OnDestroy, OnInit} from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-scarves',
  templateUrl: './woman-scarves.component.html',
  styleUrls: ['./woman-scarves.component.scss']
})
export class WomanScarvesComponent implements OnInit, OnDestroy {


  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanScarves: Product[];

  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanScarves = this.womanService.getWomanScarves();

    });
    this.womanScarves = this.womanService.getWomanScarves();
  }

  addWomanScarvesToCart(womanScarve) {
    this.cartService.cart.push(womanScarve);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
