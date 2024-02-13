import { ImageSourcePropType } from "react-native";
import { icons } from "../assets/icons";
import { images } from "../assets/images";
import { Popular, Restaurant, SlideData } from "../type";

export const restaurantData: Restaurant[] = [
  {
    image: images.rest1,
    id: 1,
    name: "Rose garden restaurant",
    desc: "Burger - Chiken - Riche - Wings",
    ratings: "4.5",
  },
  {
    image: images.rest2,
    id: 2,
    name: "Tasty treat Gallery",
    desc: "Burger - Chiken - Riche - Wings",
    ratings: "5.0",
  },
  {
    image: images.rest3,
    id: 3,
    name: "Spicy restaurant",
    desc: "Burger - Chiken - Riche - Wings",
    ratings: "4.2",
  },
];

export const popularFood: Popular[] = [
  {
    item: "Burger Bistro",
    price: 2500,
    kitchen: "Rose garden",
    image: images.item1,
    id: 1,
    itemCount: 0,
    preview: [
      images.FoodItem_JollofRice,
      images.FoodItem_Potate,
      images.FoodItem_Swallow,
      images.foodCat1,
      images.foodCat2
    ]
  },
  {
    item: "Smokin Burger",
    price: 2500,
    kitchen: "Cafenio Restaurant",
    image: images.item2,
    id: 2,
    itemCount: 0,
    preview: [
      images.FoodItem_JollofRice,
      images.FoodItem_Potate,
      images.FoodItem_Swallow,
      images.foodCat1,
      images.foodCat2
    ]
  },
  {
    item: "Buffalo Burgers",
    price: 7300,
    kitchen: "Kaji Firm Kitchen",
    image: images.item3,
    id: 3,
    itemCount: 0,
    preview: [
      images.FoodItem_JollofRice,
      images.FoodItem_Potate,
      images.FoodItem_Swallow,
      images.foodCat1,
      images.foodCat2
    ]
  },
  {
    item: "Bullseye Burgers",
    price: 9400,
    kitchen: "Kabab restaurant",
    image: images.item4,
    id: 4,
    itemCount: 0,
    preview: [
      images.FoodItem_JollofRice,
      images.FoodItem_Potate,
      images.FoodItem_Swallow,
      images.foodCat1,
      images.foodCat2
    ]
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


export const chartData = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

export const foodListData = [
  {
    id: 1,
    item: 'Chicken Thai Biriyani',
    category: 'Breakfast',
    price: 1200,
    reviews: 45,
    deliveryMode: 'Pick Up',
    image: images.FoodItem_JollofRice,
    rating: '4.5',
  },
  {
    id: 2,
    item: 'Chicken Thai Biriyani',
    category: 'Lunch',
    price: 2000,
    reviews: 32,
    deliveryMode: 'Delivery',
    image: images.FoodItem_Parage,
    rating: '5',
  },
  {
    id: 3,
    item: 'Chicken Thai Biriyani',
    category: 'Dinner',
    price: 3100,
    reviews: 67,
    deliveryMode: 'Pick Up',
    image: images.FoodItem_Potate,
    rating: '3.8',
  },
  {
    id: 4,
    item: 'Chicken Thai Biriyani',
    category: 'Breakfast',
    price: 1500,
    reviews: 21,
    deliveryMode: 'Delivery',
    image: images.FoodItem_Potate,
    rating: '4.6',
  },
  {
    id: 5,
    item: 'Chicken Thai Biriyani',
    category: 'Lunch',
    price: 700,
    reviews: 5,
    deliveryMode: 'Pick Up',
    image: images.FoodItem_Swallow,
    rating: '4.9',
  },
  {
    id: 6,
    item: 'Chicken Thai Biriyani',
    category: 'Dinner',
    price: 850,
    reviews: 25,
    deliveryMode: 'Delivery',
    image: images.FoodItem_JollofRice,
    rating: '5'
  },
  {
    id: 7,
    item: 'Chicken Thai Biriyani',
    category: 'Breakfast',
    price: 7500,
    reviews: 12,
    deliveryMode: 'Pick Up',
    image: images.FoodItem_Parage,
    rating: '3.6',
  },
  {
    id: 8,
    item: 'Chicken Thai Biriyani',
    category: 'Lunch',
    price: 1350,
    reviews: 21,
    deliveryMode: 'Delivery',
    image: images.FoodItem_Potate,
    rating: '4.2',
  },
  {
    id: 9,
    item: 'Chicken Thai Biriyani',
    category: 'Dinner',
    price: 1940,
    reviews: 20,
    deliveryMode: 'Pick Up',
    image: images.FoodItem_Swallow,
    rating: '3.9',
  },
]

export const notifications: Array<{
  name: string;
  info: string;
  time: string;
  id: number;
  image: ImageSourcePropType;
  preview: ImageSourcePropType;
}> = [  
  {
    id: 1,
    name: 'Tanbir Ahmed',
    info: 'Placed a new order',
    time: '25 min ago',
    image: images.noti1,
    preview: images.FoodItem_JollofRice,
  },
  {
    id: 2,
    name: 'Salim Smith',
    info: 'left a 5 star review',
    time: '5 min ago',
    image: images.noti2,
    preview: images.FoodItem_Parage,
  },
  {
    id: 3,
    name: 'Royal Bengol',
    info: 'agreed to cancel',
    time: '12 min ago',
    image: images.noti3,
    preview: images.FoodItem_Potate,
  },
  {
    id: 4,
    name: 'Pabel Vuiya',
    info: 'Placed a new order',
    time: '19 min ago',
    image: images.noti4,
    preview: images.FoodItem_Swallow,
  },
]

export const messages: Array<{
  id: number;
  name: string;
  online: boolean;
  time: string;
  person: ImageSourcePropType;
  unread: number;
  message: string;
}> = [
  {
    id: 1,
    name: 'Royal Parvej',
    message: 'Sounds awesome!',
    online: false,
    time: '19:37',
    person: images.msg1,
    unread: 2,
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    message: 'Ok, Just hurry up little bit...😊',
    online: true,
    time: '19:37',
    person: images.msg2,
    unread: 3,
  },
  {
    id: 3,
    name: 'Ralph Edwards',
    message: 'Thanks dude.',
    online: false,
    time: '19:20',
    person: images.msg3,
    unread: 0,
  }, 
  {
    id: 4,
    name: 'Cody Fisher',
    message: 'How is going...?',
    online: false,
    time: '19:17',
    person: images.msg4,
    unread: 0,
  },
  {
    id: 5,
    name: 'Eleanor Pena',
    message: 'Thanks for the awesome food man...!',
    online: true,
    time: '19:13',
    person: images.noti3,
    unread: 0,
  }
]

export const reviews: Array<{
  date: string;
  profilePhoto: ImageSourcePropType;
  desc: string;
  name: string;
  id: number;
  star: number;
}> = [
  {
    name: 'Ijah Manthum',
    id: 1,
    desc: 'This Food so tasty & delicious. Breakfast so fast Delivered in my place. Chef is very friendly. I’m really like chef for Home Food Order. Thanks.',
    date: '20/12/2020',
    profilePhoto: images.reviewer1,
    star: 3,
  },
  {
    name: 'Usman Yori',
    id: 2,
    desc: 'This Food so tasty & delicious. Breakfast so fast Delivered in my place.',
    date: '20/12/2020',
    profilePhoto: images.reviewer2,
    star: 4,
  },
  {
    name: 'Bingo Cutter',
    id: 3,
    desc: 'This Food so tasty & delicious.',
    date: '20/12/2020',
    profilePhoto: images.reviewer3,
    star: 5,
  },
  {
    name: 'Bright Miller',
    id: 3,
    desc: 'This Food so tasty & delicious. Breakfast so fast Delivered in my place. ',
    date: '20/12/2020',
    profilePhoto: images.reviewer4,
    star: 5
  },
  {
    name: 'Bright Miller',
    id: 3,
    desc: 'This Food so tasty & delicious. Breakfast so fast Delivered in my place. ',
    date: '20/12/2020',
    profilePhoto: images.reviewer4,
    star: 4
  },
  {
    name: 'Puller Shedege',
    id: 3,
    desc: 'This Food so tasty & delicious. Breakfast so fast Delivered in my place.',
    date: '20/12/2020',
    profilePhoto: images.reviewer5,
    star: 3,
  },
]

export const drivers: Array<{
  image: ImageSourcePropType;
  name: string;
  online: boolean;
  id: number;
}> = [
  {
    id: 1,
    name: 'Royal Parvej',
    image: images.noti4,
    online: true,
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    image: images.msg1,
    online: true,
  },
  {
    id: 3,
    name: 'Ralph Edwards',
    image: images.noti3,
    online: true,
  },
  {
    id: 4,
    name: 'Cody Fisher',
    image: images.msg3,
    online: true,
  },
  {
    id: 5,
    name: 'Eleanor Pena',
    image: images.noti2,
    online: false,
  },
]

export const foodAssign: Array<{
  id: number;
  image: ImageSourcePropType;
  assigned: boolean;
  price: number;
  name: string;

}> = [
  {
    id: 1,
    name: 'Chicken Thai Biriyani',
    assigned: false,
    price: 6070,
    image: images.assignedDrivers1
  },
  {
    id: 2,
    name: 'Fried Chicken',
    assigned: true,
    price: 5670,
    image: images.assignedDrivers2
  },
  {
    id: 3,
    name: 'Cripsy Beef',
    assigned: false,
    price: 5670,
    image: images.assignedDrivers3
  },
  {
    id: 4,
    name: 'Crisp Chicken',
    assigned: false,
    price: 5670,
    image: images.FoodItem_Parage
  },
]

export const slideData: SlideData[] = [
  {
    id: 1,
    preview: images.onboardOne,
    title: "Discover Culinary Wonders",
    desc: "Explore a world of flavors, where every bite is a journey to delight. Place your order, and let the magic unfold.",
  },
  {
    id: 2,
    preview: images.onboardTwo,
    title: "Savor the Extraordinary",
    desc: "Indulge in a symphony of tastes. Your favorite foods, expertly curated in one place. Order now for a culinary adventure!",
  },
  {
    id: 3,
    preview: images.onboardThree,
    title: "Culinary Artistry Unleashed",
    desc: "Embark on a gastronomic odyssey with dishes crafted by renowned chefs. Your order is the first step to a feast of excellence.",
  },
  {
    id: 4,
    preview: images.onboardThree,
    title: "Journey to Your Doorstep",
    desc: "Experience the joy of free delivery! Your favorite foods, delivered to your door—because great tastes should come to you effortlessly.",
  },
];
