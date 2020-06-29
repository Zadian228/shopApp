export interface Product {
  name: string;
  cash: number;
  imgPath: string;
}

export interface Cart {
  name: string;
  cash: number;
  imgPath: string;
}


export interface Order {
  firstName: string;
  secondName: number;
  address: string;
  city: string;
  email: string;
  phone: number;
  cash: number;
  cart: [];
}
