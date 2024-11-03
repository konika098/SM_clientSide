import { IBenefit, IBestseller, ICategory, IInsta, INavItem, IProducts, IShipping } from "./type";
import category1 from "/public/assets/images.png";
import photo from "/public/assets/photo.png";
import leaf from "../../public/assets/leaf 1.png";
import group from "../../public/assets/Group.png";
import face from "../../public/assets/face 1.png"
import re from "../../public/assets/return 1.png"
import delivery from "../../public/assets/trolley.png"
import time from "../../public/assets/time.png"
import payment from "../../public/assets/payment.png"
import money from "../../public/assets/money.png"

export const navItems: INavItem[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];
export const category: ICategory[] = [
    {
      id: 1,
      img:category1,
      name: "Skin Care",
     
    },
    {
      id: 2,
      img:category1,
      name: "Body Care",
    },
    {
      id: 3,
      img:category1,
      name: "Hair",
    },
  ];
export const bestseller: IBestseller[] = [
    {
      id: 1,
      img:photo,
      name: "Liquid Foundation",
      price:150,
      discount_price:120
     
    },
    {
      id: 2,
      img:photo,
      name: "Makeup Palette",
      price:150,
      discount_price:120
    },
    {
      id: 3,
      img:photo,
      name: "Brightening Cream",
      price:150,
      discount_price:120
    },
    {
      id: 4,
      img:photo,
      name: "Giorgio Armani Foundation",
      price:150,
      discount_price:120
    },
    {
      id: 5,
      img:photo,
      name: "Brightening Cream",
      price:150,
      discount_price:120
    },
    {
      id: 6,
      img:photo,
      name: "Brightening Cream",
      price:150,
      discount_price:120
    },
  ];

  export const benefit : IBenefit[]=[
    {
      id:1,
      icon:leaf,
      title:"100% Natural",
      des:"It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      id:2,
      icon:group,
      title:"No Side Effect",
      des:"It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      id:3,
      icon:face,
      title:"All Skin Type",
      des:"It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      id:4,
      icon:re,
      title:"Product Replacement",
      des:"It is a long established fact that a reader will be distracted by the readable content."
    },
  ]
  export const shipping :IShipping []=[
    {
      id:1,
      icon:delivery,
      name:"Free Shipping",
      des:"Free shipping for order above $150"
    },
    {
      id:2,
      icon:money,
      name:"Money Guarantee",
      des:"Within 30 days for an exchange"
    },
    {
      id:3,
      icon:time,
      name:"Online Support",
      des:"24 hours a day, 7 days a week"
    },
    {
      id:4,
      icon:payment,
      name:"Flexible Payment",
      des:"Pay with multiple credit cards"
    }
  ]
  export const insta:IInsta[]=[
    {
      id:1,
      img:photo
    },
    {
      id:2,
      img:photo
    },
    {
      id:3,
      img:photo
    },
    {
      id:4,
      img:photo
    }
  ]
  export const products: IProducts[] = [
    {
      id:1,
      img:photo,
      name: "Liquid Foundation",
      price: 120,
      oldPrice: 150,
    },
    {
      id:2,
      img:photo,
      name: "Giorgio Armani Foundation",
      price: 250,
      oldPrice: 300,
    },
    // Add more products as needed
  ];
  
  