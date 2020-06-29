import {Component, OnDestroy, OnInit} from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-shoe',
  templateUrl: './woman-shoe.component.html',
  styleUrls: ['./woman-shoe.component.scss']
})
export class WomanShoeComponent implements OnInit, OnDestroy {

  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanShoe: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanShoe = this.womanService.getWomanShoe();

    });
    this.womanShoe = this.womanService.getWomanShoe();
  }

  addWomanShoesToCart(womanShoes) {
    this.cartService.cart.push(womanShoes);
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
