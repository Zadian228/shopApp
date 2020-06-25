import { Injectable } from '@angular/core';
import {Product} from "../shared/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManService {

  constructor() { }

  productChanged = new Subject<Product[]>();

  public manShirts: Product[] = [
    {name: 'BAWER / Рубашка', cash: 3999, imgPath: 'https://img1.wbstatic.net/big/new/6700000/6701019-1.jpg' },
    {name: 'Envy Lab / Рубашка', cash: 2999, imgPath: 'https://img2.wbstatic.net/big/new/8610000/8618472-1.jpg' },
  ];
  public manT_Shirts: Product[] = [
    {name: 'Envy Lab / Футболка', cash: 699, imgPath: 'https://img1.wbstatic.net/big/new/4050000/4051515-1.jpg' },
    {name: 'Print Bar / Мужская футболка с принтом "Лес"', cash: 999, imgPath: 'https://img1.wbstatic.net/big/new/8950000/8958255-1.jpg' },
  ];
  public manPants: Product[] = [
    {name: 'Брюки Алмаз', cash: 2999, imgPath: 'https://sudar.su/upload/resize_cache/iblock/e92/1520_1715_1/e9253662ea71bb81ce24ff1425ec4172.jpg' },
    {name: 'Брюки Монтана', cash: 2499, imgPath: 'https://sudar.su/upload/resize_cache/iblock/68c/1520_1715_1/68c035fe85b704f931d0db9909c3132f.jpg' },
  ];
  public manBoots: Product[] = [
    {name: 'Коричневые ботинки из кожи', cash: 3499, imgPath: 'https://respect-shoes.ru/upload/iblock/c99/c9974e4fccf00d9db2ccb672705591fb.JPG' },
    {name: 'Черные ботинки из кожи на шнуровке', cash: 4999, imgPath: 'https://respect-shoes.ru/upload/iblock/597/597edbe2448f29d88c05945f9f0b4e73.JPG' },
  ];
  public manSneakers: Product[] = [
    {name: 'Nike XXX Model NAVI NEW ERA 2020', cash: 2999, imgPath: 'https://www.airjordan2019.com/image/cache/catalog/products/nike-air-max-97-ul17-se-1549025-800x800.jpg' },
    {name: 'Adidas PRO JMIH EDITION 2020', cash: 4999, imgPath: 'https://main-cdn.goods.ru/big1/hlr-system/16665771230/100025414569b0.jpg' },
  ];
  public manTies: Product[] = [
    {name: 'Signature / Галстук "Роскошь изгнания"', cash: 999, imgPath: 'https://img1.wbstatic.net/big/new/6100000/6107751-1.jpg' },
    {name: 'HUGO / Галстук', cash: 1299, imgPath: 'https://img2.wbstatic.net/big/new/11420000/11428248-1.jpg' },
  ];
  public manWatch: Product[] = [
    {name: 'GUESS / Наручные часы', cash: 7999, imgPath: 'https://img2.wbstatic.net/big/new/10320000/10321064-1.jpg' },
    {name: 'GUESS / Часы', cash: 9999, imgPath: 'https://img2.wbstatic.net/big/new/3070000/3079234-1.jpg' },
  ];

  getManShirts() {
    return this.manShirts.slice();
  }

  getManT_Shirts() {
    return this.manT_Shirts.slice();
  }

  getManPants() {
    return this.manPants.slice();
  }

  getManBoots() {
    return this.manBoots.slice();
  }

  getManSneakers() {
    return this.manSneakers.slice();
  }

  getManTies() {
    return this.manTies.slice();
  }

  getManWatch() {
    return this.manWatch.slice();
  }

}
