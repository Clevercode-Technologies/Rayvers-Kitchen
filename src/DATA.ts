import { ImageSourcePropType } from "react-native";
import { icons } from "../assets/icons";
import { images } from "../assets/images";

export const restaurantData: Restaurant[] = [
  {
    image: images.rest1,
    id: 1,
    name: "Rose garden restaurant",
    desc: "Burger - Chiken - Riche - Wings",
    rating: "4.5",
  },
  {
    image: images.rest2,
    id: 2,
    name: "Tasty treat Gallery",
    desc: "Burger - Chiken - Riche - Wings",
    rating: "5.0",
  },
  {
    image: images.rest3,
    id: 3,
    name: "Spicy restaurant",
    desc: "Burger - Chiken - Riche - Wings",
    rating: "4.2",
  },
];

export const popularFood: Popular[] = [
  {
    item: "Burger Bistro",
    price: "₦2500",
    kitchen: "Rose garden",
    image: images.item1,
    id: 1,
  },
  {
    item: "Smokin Burger",
    price: "₦2500",
    kitchen: "Cafenio Restaurant",
    image: images.item2,
    id: 2,
  },
  {
    item: "Buffalo Burgers",
    price: "₦7300",
    kitchen: "Kaji Firm Kitchen",
    image: images.item3,
    id: 3,
  },
  {
    item: "Bullseye Burgers",
    price: "₦9400",
    kitchen: "Kabab restaurant",
    image: images.item4,
    id: 3,
  },
];

export const restCategories = [
  { category: "Rice", id: 1 },
  { category: "Pasta", id: 2 },
  { category: "Swallow", id: 3 },
  { category: "Pepper Soup", id: 4 },
  { category: "All", id: 5 },
];

export const ingredients = [
  { item: "Salt", image: icons.salt, id: 1 },
  { item: "Chicken", image: icons.chicken, id: 2 },
  { item: "Onion", image: icons.onion, id: 3 },
  { item: "Garlic", image: icons.garlic, id: 4 },
  { item: "Pepper", image: icons.pepper, id: 5 },
  { item: "Ginger", image: icons.ginger, id: 6 },
  { item: "Orange", image: icons.orange, id: 7 },
  { item: "Walnut", image: icons.walnut, id: 8 },
];

export const foodPrevSliderData = [
  { image: images.foodPrev, id: 1 },
  { image: images.foodPrev, id: 2 },
  { image: images.foodPrev, id: 3 },
  { image: images.foodPrev, id: 4 },
  { image: images.foodPrev, id: 5 },
];

export const cartData = [
  {
    preview: images.FoodItem_JollofRice,
    id: 1,
    item: "Pepper Rice",
    restaurant: "Mama Ebo Pepper...",
    price: 5400,
  },
  {
    preview: images.FoodItem_Swallow,
    id: 2,
    item: "Egusi Assorted & Semo",
    restaurant: "Pride Kitchen...",
    price: 2550,
  },
  {
    preview: images.FoodItem_Potate,
    id: 3,
    item: "Ghana Yam Potage",
    restaurant: "Mama's Spot",
    price: 6475,
  },
];

export const msgs = [
  {
    id: 1,
    time: "8:10 pm",
    message: "Are you coming?",
    sender: "me",
    read: true,
    photo: images.myProfile,
  },
  {
    id: 2,
    time: "8:11 pm",
    message: "Hay, Congratulation for order? sdsdsd sdsd afasdf",
    sender: "recipient",
    photo: images.logisticProfilePic,
  },
  {
    id: 3,
    time: "8:11 pm",
    message: "Hey Where are you now?",
    sender: "me",
    read: true,
    photo: images.myProfile,
  },
  {
    id: 4,
    time: "8:12 pm",
    message: "I’m Coming , just wait ...",
    sender: "recipient",
    photo: images.logisticProfilePic,
  },
  {
    id: 5,
    time: "8:12 pm",
    message: "Hurry Up, Man Ohanmwen dey beat me",
    sender: "me",
    read: false,
    photo: images.myProfile,
  },
];


export const OngoingData: {
  id: number;
  name: string;
  category: string;
  image: ImageSourcePropType;
  price: number;
  number: number;
  date?: string;
  time?: string;
  status?: STATUS;
}[] = [
  {
    id: 1,
    name: 'Swallow & Egusi Soup',
    price: 2450,
    number: 2,
    category: 'Swallow',
    image: images.FoodItem_Swallow
  },
  {
    id: 2,
    name: 'Jeloff Rice',
    price: 1370,
    number: 1,
    category: 'Rice',
    image: images.FoodItem_JollofRice
  },
  {
    id: 3,
    name: 'Jeloff Rice',
    price: 3750,
    number: 1,
    category: 'Pepper Soup',
    image: images.FoodItem_Potate
  },
]

export enum STATUS {
  COMPLETED = 'Completed',
  CANCELED = 'Canceled',
}

export const historyData: {
  id: number;
  name: string;
  category: string;
  image: ImageSourcePropType;
  price: number;
  number: number;
  date: string;
  time: string;
  status: STATUS;
}[] = [
  {
    id: 1,
    name: 'Swallow & Egusi Soup',
    price: 2450,
    number: 2,
    category: 'Swallow',
    image: images.FoodItem_Swallow,
    date: '29 JAN',
    time: '12:30',
    status: STATUS.COMPLETED
  },
  {
    id: 2,
    name: 'Jeloff Rice',
    price: 1370,
    number: 1,
    category: 'Rice',
    image: images.FoodItem_JollofRice,
    date: '30 JAN',
    time: '12:30',
    status: STATUS.COMPLETED
  },
  {
    id: 3,
    name: 'Jeloff Rice',
    price: 3750,
    number: 1,
    category: 'Pepper Soup',
    image: images.FoodItem_Potate,
    date: '31 JAN',
    time: '04:27',
    status: STATUS.CANCELED
  },
]