import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Subscription} from "rxjs";
import {Cart, Order} from "../../shared/interfaces";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }


  subscribe: Subscription;
  order: Order[];


  ngOnInit(){
    this.subscribe = this.orderService.orderChanged.subscribe( () => {
      this.order = this.orderService.getOrder();
    });
    this.order = this.orderService.getOrder();
  }

  ngOnDestroy() {
      this.subscribe.unsubscribe();
    }

}
