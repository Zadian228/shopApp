import { Injectable } from '@angular/core';
import {Cart, Order} from "../shared/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {
  }


  public order: Order[] = [];


  orderChanged = new Subject<Order[]>();

  getOrder() {
    return this.order.slice();
  }

  addOrder(order: Order) {
    this.order.push(order);
    this.orderChanged.next(this.order.slice());

  }

}
