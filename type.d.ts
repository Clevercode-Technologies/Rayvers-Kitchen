interface ItemCrdProp {
    item: {
      item: string;
      price: string;
      kitchen: string;
      image: ImageSourcePropType;
      id: number;
    }
  }

  interface Popular {
    item: string;
    price: string;
    kitchen: string;
    image: ImageSourcePropType;
    id: number;
  }

  interface Restaurant {
    name: string;
    desc: string;
    rating: string;
    image: ImageSourcePropType;
    id: number;
  }