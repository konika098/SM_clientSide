import { StaticImageData } from "next/image";

export type INavItem = {
  id: number;
  name: string;
  path: string;
};

export type ICategory = {
  id: number;
  img: StaticImageData;
  name: string;
};

export type IBestseller = {
  id: number;
  img: StaticImageData;
  name: string;
  price: number;
  discount_price: number;
};

export type IBenefit = {
  id: number;
  icon: StaticImageData;
  title: string;
  des: string;
};

export type IShipping = {
  id: number;
  icon: StaticImageData;
  name: string;
  des: string;
};

export type IInsta = {
  id: number;
  img: StaticImageData;
};

export type IProducts = {
  id: number;
  img: StaticImageData;
  name: string;
  price: number;
  oldPrice: number;
};
// types.ts
export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice?: number;
}
