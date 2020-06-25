import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {ManService} from "../../../../services/man.service";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-watch',
  templateUrl: './man-watch.component.html',
  styleUrls: ['./man-watch.component.scss']
})
export class ManWatchComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manWatch: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manWatch = this.manService.getManWatch();

    });
    this.manWatch = this.manService.getManWatch();
  }

  addManWatchToCart(manWatches) {
    this.cartService.cart.push(manWatches);
  }

}
