import { Component, OnInit } from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-skirts',
  templateUrl: './woman-skirts.component.html',
  styleUrls: ['./woman-skirts.component.scss']
})
export class WomanSkirtsComponent implements OnInit {

  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanSkirts: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanSkirts = this.womanService.getWomanSkirts();

    });
    this.womanSkirts = this.womanService.getWomanSkirts();
  }


  addWomanSkirtsToCart(womanSkirt) {
    this.cartService.cart.push(womanSkirt);
  }


}
