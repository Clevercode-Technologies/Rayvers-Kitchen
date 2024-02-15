import { ImageSourcePropType } from "react-native";

interface ItemCrdProp {
  item: {
    item: string;
    price: number;
    kitchen: string;
    image: ImageSourcePropType;
    id: number;
    kitchenId?: number;
  };
}
interface ItemCardProp {
  item: Dish;
}

type CartItem = {
  item: string;
  price: number;
  kitchen: string;
  image: ImageSourcePropType;
  id: number;
  kitchenId?: number;
  itemCount?: number;
  preview: Array<ImageSourcePropType>;
};

interface Popular {
  item: string;
  price: number;
  kitchen: string;
  image: ImageSourcePropType;
  kitchenId?: number;
  id: number;
  itemCount?: number;
  preview: Array<ImageSourcePropType>;
}

interface Restaurant {
  name: string;
  description: string;
  ratings: string;
  image: ImageSourcePropType;
  id: number;
  address?: string;
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

type RecentType = {
  id: number;
  prevSearch: string;
};

type RecentPayload = RecentType;
type DeleteRecentProps = number | null;
type DeleteCart = number | null;

enum LABEL {
  HOME = "Home",
  WORK = "Work",
  OTHER = "OTHER",
}

interface AddressTypes {
  address: string;
  street: string;
  postCode: string;
  apartment: string;
  addressType: LABEL;
}

interface RatingData {
  rating: string;
  id: number;
  person: {
    name: string;
    image: ImageSourcePropType;
  };
}

type ratings = Array<RatingData>;

interface SlideData {
  preview: any;
  title: string;
  desc: string;
  id: number;
}

type UserInfo = {
  name: string;
  email: string;
};

type userAddress = {
  district: null | string;
  city: string;
  street: null | string;
  region: string;
  country: string;
  postalCode: null | string;
  subregion: null | string;
  timezone: string;
  streetNumber: null | string;
  name: string;
  isoCountryCode: string;
  longitude: number;
  latitude: number;
};

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  restaurant: number;
  ratings: string;
  _ingredients: Array<string>;
  favourite: [];
  restaurant_details: {
    name: string;
    rating: number;
  };
  get_category: {
    name: string;
    id: number;
    image: string;
  };
  images: Array<{
    id: number;
    file: string;
    label: string;
  }>;
  category: number;
  itemCount: number;
}
interface Cart {
  id: number;
  name: string;
  description: string;
  price: string;
  restaurant: number;
  ratings: string;
  _ingredients: Array<string>;
  favourite: [];
  restaurant_details: {
    name: string;
    rating: number;
  };
  get_category: {
    name: string;
    id: number;
    image: string;
  };
  images: Array<{
    id: number;
    file: string;
    label: string;
  }>;
  category: number;
  itemCount: number;
}

interface DishDetails {
  id: number;
  name: string;
  description: string;
  price: string;
  restaurant: number;
  rating: string;
  _ingredients: Array<string>;
  favourite: [];
  restaurant_details: {
    name: string;
    rating: number;
  };
  get_category: {
    name: string;
    id: number;
    image: string;
  };
  images: Array<{
    id: number;
    file: string;
    label: string;
  }>;
  category: number;
  itemCount: number;
}

interface RestaurantCardProp {
  restaurant: Restaurant;
}

type Categories = {
  id: number;
  name: string;
  image: string;
};

enum CardType {
  "MASTER" = "master",
  "VISA" = "visa",
}

type CardDetails = {
  type: CardType;
  cvc: string;
  expiryDate: string;
  holderName: string;
  number: string;
};

enum STATUS {
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  PENDING = 'pending'
}

interface OrderOngoingPayload {
  id: number;
  quantity: number;
  amount: number;
  status: STATUS;
  dish: {
    id: number;
    name: string;
    time_duration: number;
    description: string;
    price: number;
    restaurant: number;
    ratings: string;
    restaurant_details: {
      name: string;
      ratings: number;
    };
    get_category: {
      id: number;
      name: string;
      image: string;
    };
    images: Array<{
      id: number;
      file: string;
      label: string;
    }>;
  };
  driver?: {
    id: number;
    driver_id: "Jose";
    vehicle_image: null | string;
    restaurant: number;
    vehicle_color: string;
    vehicle_description: string;
    vehicle_number: string;
    available: boolean;
    current_location_latitude: null | string;
    current_location_longitude: null | string;
  };
}

interface RedirectParams {
  status: 'successful' | 'cancelled';
  transaction_id?: string;
  tx_ref: string;
}