import { Injectable } from '@angular/core';
import {Product} from "../shared/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WomanService {

  constructor() { }

  productChanged = new Subject<Product[]>();

  public womanBallet: Product[] = [
    {name: 'Черные кожаные балетки', cash: 2999, imgPath: 'https://respect-shoes.ru/upload/iblock/2c1/2c182e2370e3d13bd0a4f2a9c5dcee32.JPG' },
    {name: 'Черные балетки с бантиком', cash: 2599, imgPath: 'https://respect-shoes.ru/upload/iblock/36e/36efec9f82fa27654b344cf3fd9e1a17.JPG' },
  ];
  public womanShoe: Product[] = [
    {name: 'Голубые туфли-лодочки на каблуке конус', cash: 1999, imgPath: 'https://respect-shoes.ru/upload/iblock/96d/96d887090b0062ec766181fa29a5b335.JPG' },
    {name: 'Серые туфли-лодочки на шпильке', cash: 2599, imgPath: 'https://respect-shoes.ru/upload/iblock/e00/e0062a76f9a1eacb94c9ac876dc1e87d.JPG' },
  ];
  public womanSkirts: Product[] = [
    {name: 'PEPE JEANS LONDON / Юбка', cash: 2999, imgPath: 'https://img2.wbstatic.net/big/new/11580000/11583340-1.jpg' },
    {name: 'Katrin Salikhova / Юбка', cash: 2499, imgPath: 'https://img2.wbstatic.net/big/new/8780000/8789446-1.jpg' },
  ];
  public womanPants: Product[] = [
    {name: 'oodji / Брюки', cash: 2499, imgPath: 'https://img2.wbstatic.net/big/new/2920000/2927006-1.jpg' },
    {name: 'Modis / Брюки', cash: 1999, imgPath: 'https://img2.wbstatic.net/big/new/11870000/11879878-1.jpg' },
  ];
  public womanBlouses_Shirts: Product[] = [
    {name: 'IDGem / Рубашка с вышивкой', cash: 1999, imgPath: 'https://img2.wbstatic.net/big/new/11520000/11526016-1.jpg' },
    {name: 'oodji / Блузка', cash: 2499, imgPath: 'https://img1.wbstatic.net/big/new/3770000/3772077-1.jpg' },
  ];
  public womanScarves: Product[] = [
    {name: 'Daniele Patrici / шарф', cash: 999, imgPath: 'https://img1.wbstatic.net/big/new/8340000/8349575-1.jpg' },
    {name: 'Русские в моде / Платок "Авангард"', cash: 1499, imgPath: 'https://img1.wbstatic.net/big/new/5060000/5067111-1.jpg' },
  ];
  public womanBags: Product[] = [
    {name: 'Daniele Patrici / Сумка', cash: 8999, imgPath: 'https://img1.wbstatic.net/big/new/11050000/11051849-1.jpg' },
    {name: 'Christie Saiko / Сумка, круглая сумка, женская сумка', cash: 4999, imgPath: 'https://img2.wbstatic.net/big/new/9800000/9806218-1.jpg' },
  ];

  getWomanBags() {
    return this.womanBags.slice();
  }

  getWomanScarves() {
    return this.womanScarves.slice();
  }

  getWomanBlouses_Shirts() {
    return this.womanBlouses_Shirts.slice();
  }

  getWomanPants() {
    return this.womanPants.slice();
  }

  getWomanSkirts() {
    return this.womanSkirts.slice();
  }

  getWomanShoe() {
    return this.womanShoe.slice();
  }

  getWomanBallet() {
    return this.womanBallet.slice();
  }

}
