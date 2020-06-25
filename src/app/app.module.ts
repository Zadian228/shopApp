import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManComponent } from './main-comp/man/man.component';
import { WomanComponent } from './main-comp/woman/woman.component';
import { ManShoesComponent } from './main-comp/man/man-shoes/man-shoes.component';

import { ManClothesComponent } from './main-comp/man/man-clothes/man-clothes.component';
import { ManShirtsComponent } from './main-comp/man/man-clothes/man-shirts/man-shirts.component';
import { ManSneakersComponent } from './main-comp/man/man-shoes/man-sneakers/man-sneakers.component';
import { ManBootsComponent } from './main-comp/man/man-shoes/man-boots/man-boots.component';
import { ManPantsComponent } from './main-comp/man/man-clothes/man-pants/man-pants.component';
import { ManTShirtsComponent } from './main-comp/man/man-clothes/man-t-shirts/man-t-shirts.component';
import { ManAccessoryComponent } from './main-comp/man/man-accessory/man-accessory.component';
import { ManTiesComponent } from './main-comp/man/man-accessory/man-ties/man-ties.component';
import { ManWatchComponent } from './main-comp/man/man-accessory/man-watch/man-watch.component';
import { WomanShoesComponent } from './main-comp/woman/woman-shoes/woman-shoes.component';
import { WomanClothesComponent } from './main-comp/woman/woman-clothes/woman-clothes.component';
import { WomanAccessoryComponent } from './main-comp/woman/woman-accessory/woman-accessory.component';
import { WomanShoeComponent } from './main-comp/woman/woman-shoes/woman-shoe/woman-shoe.component';
import { WomanBalletComponent } from './main-comp/woman/woman-shoes/woman-ballet/woman-ballet.component';
import { WomanSkirtsComponent } from './main-comp/woman/woman-clothes/woman-skirts/woman-skirts.component';
import { WomanBlousesShirtsComponent } from './main-comp/woman/woman-clothes/woman-blouses-shirts/woman-blouses-shirts.component';
import { WomanPantsComponent } from './main-comp/woman/woman-clothes/woman-pants/woman-pants.component';
import { WomanBagsComponent } from './main-comp/woman/woman-accessory/woman-bags/woman-bags.component';
import { WomanScarvesComponent } from './main-comp/woman/woman-accessory/woman-scarves/woman-scarves.component';
import { CartComponent } from './main-comp/cart/cart.component';
import { OrderComponent } from './main-comp/order/order.component';
import { OrderSuccessComponent } from './main-comp/order-success/order-success.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ManComponent,
    WomanComponent,
    ManShoesComponent,
    ManClothesComponent,
    ManShirtsComponent,
    ManSneakersComponent,
    ManBootsComponent,
    ManPantsComponent,
    ManTShirtsComponent,
    ManAccessoryComponent,
    ManTiesComponent,
    ManWatchComponent,
    WomanShoesComponent,
    WomanClothesComponent,
    WomanAccessoryComponent,
    WomanShoeComponent,
    WomanBalletComponent,
    WomanSkirtsComponent,
    WomanBlousesShirtsComponent,
    WomanPantsComponent,
    WomanBagsComponent,
    WomanScarvesComponent,
    CartComponent,
    OrderComponent,
    OrderSuccessComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
