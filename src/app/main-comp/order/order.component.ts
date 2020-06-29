import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManService} from "../../services/man.service";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";
import {Cart} from "../../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;

  constructor(private manService: ManService, private cartService: CartService, private router: Router, private orderService: OrderService) {}


  subscribe: Subscription;
  public initialValue = 0;
  cart: Cart[];

  ngOnInit() {
    this.orderForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'secondName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'cash': new FormControl(this.getAllSum(this.cart), Validators.required),
      'cart': new FormControl(this.cartService.getCart(), Validators.required),
    })
    this.subscribe = this.cartService.cartChanged.subscribe( () => {
      this.cart = this.cartService.getCart();
    });
    this.cart = this.cartService.getCart();
    this.getAllSum(this.cart);
  }

  getAllSum(cart: any) {
    cart = this.cartService.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cash,
      this.initialValue
    );
    return cart;
  }


  onSubmit() {
    console.log(this.orderForm.value);
    this.orderService.addOrder(this.orderForm.value);
    this.router.navigate(['/order-success']);
    this.orderForm.reset();
    this.cartService.deleteAllItems();
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
