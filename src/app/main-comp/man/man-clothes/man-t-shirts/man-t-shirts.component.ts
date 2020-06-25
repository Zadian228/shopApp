import { Component, OnInit } from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-t-shirts',
  templateUrl: './man-t-shirts.component.html',
  styleUrls: ['./man-t-shirts.component.scss']
})
export class ManTShirtsComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manT_Shirts: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manT_Shirts = this.manService.getManT_Shirts();

    });
    this.manT_Shirts = this.manService.getManT_Shirts();
  }

  addManT_ShirtsToCart(manT_Shirt) {
    this.cartService.cart.push(manT_Shirt);
  }

}
