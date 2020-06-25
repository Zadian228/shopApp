import { Component, OnInit } from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-boots',
  templateUrl: './man-boots.component.html',
  styleUrls: ['./man-boots.component.scss']
})
export class ManBootsComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manBoots: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manBoots = this.manService.getManBoots();

    });
    this.manBoots = this.manService.getManBoots();
  }


  addManBootsToCart(manBoot) {
    this.cartService.cart.push(manBoot);
  }

}
