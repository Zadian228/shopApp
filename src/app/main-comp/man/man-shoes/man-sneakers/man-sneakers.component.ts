import { Component, OnInit } from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-sneakers',
  templateUrl: './man-sneakers.component.html',
  styleUrls: ['./man-sneakers.component.scss']
})
export class ManSneakersComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manSneakers: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manSneakers = this.manService.getManSneakers();

    });
    this.manSneakers = this.manService.getManSneakers();
  }

  addManSneakersToCart(manSneaker) {
    this.cartService.cart.push(manSneaker);
  }


}
