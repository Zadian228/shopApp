import { Component, OnInit } from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-ties',
  templateUrl: './man-ties.component.html',
  styleUrls: ['./man-ties.component.scss']
})
export class ManTiesComponent implements OnInit {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manTies: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manTies = this.manService.getManTies();

    });
    this.manTies = this.manService.getManTies();
  }

  addManTiesToCart(manTie) {
    this.cartService.cart.push(manTie);
  }

}
