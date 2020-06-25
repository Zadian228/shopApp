import { Component, OnInit } from '@angular/core';
import {WomanService} from "../../../../services/woman.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-woman-ballet',
  templateUrl: './woman-ballet.component.html',
  styleUrls: ['./woman-ballet.component.scss']
})
export class WomanBalletComponent implements OnInit {


  constructor(private womanService: WomanService, private cartService: CartService) { }

  subscribe: Subscription
  womanBallet: Product[];


  ngOnInit() {
    this.subscribe = this.womanService.productChanged.subscribe(() => {
      this.womanBallet = this.womanService.getWomanBallet();

    });
    this.womanBallet = this.womanService.getWomanBallet();
  }

  addWomanBalletsToCart(womanBallets) {
    this.cartService.cart.push(womanBallets);
  }


}
