interface ItemCrdProp {
  item: {
    item: string;
    price: string;
    kitchen: string;
    image: ImageSourcePropType;
    id: number;
  };
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

interface CardInfo {
  type: string;
  number: string;
  expiryDate: string;
  cvc: string;
  holderName: string;
}

type ProfileType = {
  email?: string;
  name?: string | null;
  date_of_birth?: null;
  is_superuser?: boolean;
  is_staff?: boolean;
  is_active?: boolean;
  profile_picture?: string;
  bio?: string | null;
  role?: string;
};

export enum USER_TYPE {
  CUSTOMER = "Customer",
  CHEF = "Chef",
  DRIVER = "Driver",
}
