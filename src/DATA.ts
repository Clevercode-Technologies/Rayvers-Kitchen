import { images } from "../assets/images";

export const restaurantData: Restaurant[] = [
    {
      image: images.rest1,
      id: 1,
      name: 'Rose garden restaurant',
      desc: 'Burger - Chiken - Riche - Wings',
      rating: '4.5'
    },
    {
      image: images.rest2,
      id: 2,
      name: 'Tasty treat Gallery',
      desc: 'Burger - Chiken - Riche - Wings',
      rating: '5.0'
    },
    {
      image: images.rest3,
      id: 3,
      name: 'Spicy restaurant',
      desc: 'Burger - Chiken - Riche - Wings',
      rating: '4.2'
    },
  ]

  export const popularFood: Popular[]  = [
    {
      item: 'Burger Bistro',
      price: '₦2500',
      kitchen: 'Rose garden',
      image: images.item1,
      id: 1
    },
    {
      item: 'Smokin Burger',
      price: '₦2500',
      kitchen: 'Cafenio Restaurant',
      image: images.item2,
      id: 2
    },
    {
      item: 'Buffalo Burgers',
      price: '₦7300',
      kitchen: 'Kaji Firm Kitchen',
      image: images.item3,
      id: 3
    },
    {
      item: 'Bullseye Burgers',
      price: '₦9400',
      kitchen: 'Kabab restaurant',
      image: images.item4,
      id: 3
    },
  ]

  export const restCategories = [
    { category: 'Rice', id: 1 },
    { category: 'Pasta', id: 2 },
    { category: 'Swallow', id: 3 },
    { category: 'Pepper Soup', id: 4 },
    { category: 'All', id: 5 },
  ]