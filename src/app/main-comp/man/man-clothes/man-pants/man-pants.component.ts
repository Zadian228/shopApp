import { Component, OnInit } from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-pants',
  templateUrl: './man-pants.component.html',
  styleUrls: ['./man-pants.component.scss']
})
export class ManPantsComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manPants: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manPants = this.manService.getManPants();

    });
    this.manPants = this.manService.getManPants();

  }

  addManPantsToCart(manPant) {
    this.cartService.cart.push(manPant);
  }

}
