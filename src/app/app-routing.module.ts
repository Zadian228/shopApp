import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ManComponent} from "./main-comp/man/man.component";
import {WomanComponent} from "./main-comp/woman/woman.component";
import {ManClothesComponent} from "./main-comp/man/man-clothes/man-clothes.component";
import {ManPantsComponent} from "./main-comp/man/man-clothes/man-pants/man-pants.component";
import {ManShirtsComponent} from "./main-comp/man/man-clothes/man-shirts/man-shirts.component";
import {ManTShirtsComponent} from "./main-comp/man/man-clothes/man-t-shirts/man-t-shirts.component";
import {ManShoesComponent} from "./main-comp/man/man-shoes/man-shoes.component";
import {ManBootsComponent} from "./main-comp/man/man-shoes/man-boots/man-boots.component";
import {ManSneakersComponent} from "./main-comp/man/man-shoes/man-sneakers/man-sneakers.component";
import {ManAccessoryComponent} from "./main-comp/man/man-accessory/man-accessory.component";
import {ManTiesComponent} from "./main-comp/man/man-accessory/man-ties/man-ties.component";
import {ManWatchComponent} from "./main-comp/man/man-accessory/man-watch/man-watch.component";
import {WomanClothesComponent} from "./main-comp/woman/woman-clothes/woman-clothes.component";
import {WomanBlousesShirtsComponent} from "./main-comp/woman/woman-clothes/woman-blouses-shirts/woman-blouses-shirts.component";
import {WomanPantsComponent} from "./main-comp/woman/woman-clothes/woman-pants/woman-pants.component";
import {WomanSkirtsComponent} from "./main-comp/woman/woman-clothes/woman-skirts/woman-skirts.component";
import {WomanShoesComponent} from "./main-comp/woman/woman-shoes/woman-shoes.component";
import {WomanBalletComponent} from "./main-comp/woman/woman-shoes/woman-ballet/woman-ballet.component";
import {WomanShoeComponent} from "./main-comp/woman/woman-shoes/woman-shoe/woman-shoe.component";
import {WomanAccessoryComponent} from "./main-comp/woman/woman-accessory/woman-accessory.component";
import {WomanBagsComponent} from "./main-comp/woman/woman-accessory/woman-bags/woman-bags.component";
import {WomanScarvesComponent} from "./main-comp/woman/woman-accessory/woman-scarves/woman-scarves.component";
import {CartComponent} from "./main-comp/cart/cart.component";
import {OrderComponent} from "./main-comp/order/order.component";
import {OrderSuccessComponent} from "./main-comp/order-success/order-success.component";




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'man', component: ManComponent},
  {path: 'man/man-clothes', component: ManClothesComponent},
  {path: 'man/man-clothes/man-pants', component: ManPantsComponent},
  {path: 'man/man-clothes/man-shirts', component: ManShirtsComponent},
  {path: 'man/man-clothes/man-t-shirts', component: ManTShirtsComponent},
  {path: 'man/man-shoes', component: ManShoesComponent},
  {path: 'man/man-shoes/man-boots', component: ManBootsComponent},
  {path: 'man/man-shoes/man-sneakers', component: ManSneakersComponent},
  {path: 'man/man-accessory', component: ManAccessoryComponent},
  {path: 'man/man-accessory/man-ties', component: ManTiesComponent},
  {path: 'man/man-accessory/man-watch', component: ManWatchComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'woman/woman-clothes', component: WomanClothesComponent},
  {path: 'woman/woman-clothes/woman-blouses-shirts', component: WomanBlousesShirtsComponent},
  {path: 'woman/woman-clothes/woman-pants', component: WomanPantsComponent},
  {path: 'woman/woman-clothes/woman-skirts', component: WomanSkirtsComponent},
  {path: 'woman/woman-shoes', component: WomanShoesComponent},
  {path: 'woman/woman-shoes/woman-ballet', component: WomanBalletComponent},
  {path: 'woman/woman-shoes/woman-shoe', component: WomanShoeComponent},
  {path: 'woman/woman-accessory', component: WomanAccessoryComponent},
  {path: 'woman/woman-accessory/woman-bags', component: WomanBagsComponent},
  {path: 'woman/woman-accessory/woman-scarves', component: WomanScarvesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-success', component: OrderSuccessComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
