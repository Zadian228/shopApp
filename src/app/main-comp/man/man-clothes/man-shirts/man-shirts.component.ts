import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManService} from "../../../../services/man.service";
import {Subscription} from "rxjs";
import {Product} from "../../../../shared/interfaces";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-man-shirts',
  templateUrl: './man-shirts.component.html',
  styleUrls: ['./man-shirts.component.scss']
})
export class ManShirtsComponent implements OnInit, OnDestroy {

  constructor(private manService: ManService, private cartService: CartService) { }

  subscribe: Subscription
  manShirts: Product[];


  ngOnInit() {
    this.subscribe = this.manService.productChanged.subscribe(() => {
      this.manShirts = this.manService.getManShirts();

    });
    this.manShirts = this.manService.getManShirts();
  }

  addManShirtsToCart(manShirt) {
    this.cartService.cart.push(manShirt);
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
