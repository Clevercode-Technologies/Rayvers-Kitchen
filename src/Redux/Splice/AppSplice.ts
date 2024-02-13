import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import {
  AddressTypes,
  CardDetails,
  Cart,
  Categories,
  DeleteRecentProps,
  Dish,
  ProfileType,
  RecentPayload,
  RecentType,
  Restaurant,
  USER_TYPE,
  userAddress,
  UserInfo,
} from "../../../type";

interface AppState {
  token: string | null;
  availableCards: null | Array<CardDetails>;
  userType: USER_TYPE | null;
  email: string;
  password: string;
  name: string;
  rePassword: string;
  userProfile: ProfileType | null;
  profileName: string;
  profileNumber: string;
  profileBio: string;
  profilePicture: string;
  searchQuery: string;
  keywords: Array<RecentType>;
  carts: Array<Cart> | null;
  address: AddressTypes | null;
  cartSubTotal: number;
  carouselImages: Array<{
    id: number;
    file: string;
  }> | null;
  favorite: Array<Dish> | null;
  userId: number | null;
  userInfo: UserInfo | null;
  userAddress: userAddress | null;
  restaurants: Array<Restaurant> | null;
  dishes: Array<Dish> | null;
  categories: Categories[] | null;
  categoryQuery: string;
}

const initialState: AppState = {
  token: null,
  keywords: [],
  userType: null,
  availableCards: null,
  email: "",
  password: "",
  name: "",
  rePassword: "",
  userProfile: null,
  profileName: "",
  profileNumber: "",
  profileBio: "",
  profilePicture: "",
  searchQuery: "",
  carts: null,
  address: null,
  cartSubTotal: 0,
  carouselImages: null,
  favorite: null,
  userId: null,
  userInfo: null,
  userAddress: null,
  restaurants: null,
  dishes: null,
  categories: null,
  categoryQuery: "default",
};

export const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    // addCard: (state, action: PayloadAction<CardInfo>) => {
    //   const exist = (card: CardInfo) =>
    //   state.availableCards?.filter(
    //     (cardItem) =>
    //       card &&
    //       card?.toLowerCase().includes(searchQuery?.toLowerCase())
    //   );
    // }
    addCard: (state, action: PayloadAction<CardDetails>) => {
      console.log('cards: ', state.availableCards);
      if(state.availableCards !== null) {
        const newCard = [...state.availableCards, action.payload];
        state.availableCards = newCard;
      } else {
        const newCard = [action.payload];
        state.availableCards = newCard;
      }
    },
    setUserType: (state, action: PayloadAction<USER_TYPE>) => {
      state.userType = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setRePassword: (state, action: PayloadAction<string>) => {
      state.rePassword = action.payload;
    },
    setProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    setProfileNumber: (state, action: PayloadAction<string>) => {
      state.profileNumber = action.payload;
    },
    setProfileBio: (state, action: PayloadAction<string>) => {
      state.profileBio = action.payload;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    addRecent: (state, action: PayloadAction<RecentPayload>) => {
      if (action.payload.prevSearch?.length > 4 && state.keywords.length != 0) {
        let duplicates = state.keywords.filter(
          (item) => item.prevSearch === action.payload.prevSearch
        );
        if (duplicates.length == 0) {
          state.keywords.push(action.payload);
        }
      } else {
        state.keywords.push(action.payload);
      }
    },
    deleteRecent: (state, action: PayloadAction<DeleteRecentProps>) => {
      let sortedRecent = state.keywords.filter(
        (item) => item.id !== action.payload
      );
      state.keywords = sortedRecent;
    },
    addCart: (state, action: PayloadAction<Dish>) => {
      const existingItem = state.carts?.find(
        (item) => item.id === action.payload.id
      );

      const formattedCart = {
        ...action.payload,
        itemCount: 1,
      };

      if (!existingItem) {
        // If the item does not exist in the cart, add it
        state.carts = state.carts
          ? [...state.carts, formattedCart]
          : [formattedCart];
      }
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      // Filter out the item with the given id
      if (state.carts)
        state.carts = state.carts?.filter((item) => item.id !== action.payload);
    },
    incrementCartCount: (state, action: PayloadAction<number>) => {
      // Find the item and increase its count by one
      if (state.carts) {
        const targetedItem = state.carts?.findIndex(
          (item) => item.id === action.payload
        );
        if (targetedItem !== -1)
          state.carts[targetedItem].itemCount =
            (state.carts[targetedItem].itemCount || 0) + 1;
      }
    },
    decrementCartCount: (state, action: PayloadAction<number>) => {
      if (state.carts) {
        const targetedItemIndex = state.carts.findIndex(
          (item) => item.id === action.payload
        );

        if (targetedItemIndex !== -1) {
          // If the item is found in the cart
          state.carts[targetedItemIndex].itemCount = Math.max(
            (state.carts[targetedItemIndex].itemCount || 0) - 1,
            1
          );
          // Using Math.max to ensure that the count doesn't go below 0
        }
      }
    },
    setAddress: (state, action: PayloadAction<AddressTypes | null>) => {
      state.address = action.payload;
    },
    deleteAddress: (state) => {
      state.address = null;
    },
    getCartSubTotal: (state) => {
      if (state.carts) {
        const totalPrice = state.carts?.reduce((accumulator, currentItem) => {
          return (
            accumulator +
            Number(currentItem.price) * Number(currentItem.itemCount)
          );
        }, 0);

        state.cartSubTotal = totalPrice;
      }
    },
    resetCartSubTotal: (state) => {
      state.cartSubTotal = 0;
    },
    setCarouselImages: (
      state,
      action: PayloadAction<
        Array<{
          id: number;
          file: string;
        }>
      >
    ) => {
      state.carouselImages = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Dish>) => {
      const existingFavorite = state.favorite?.find(
        (item) => item.id === action.payload.id
      );

      if (!existingFavorite) {
        // If the item does not exist in the cart, add it
        state.favorite = state.favorite
          ? [...state.favorite, action.payload]
          : [action.payload];
      }
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      // Filter out the item with the given id
      if (state.favorite)
        state.favorite = state.favorite?.filter(
          (item) => item.id !== action.payload
        );
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setUserAddress: (state, action: PayloadAction<userAddress | null>) => {
      state.userAddress = action.payload;
    },
    setRestaurants: (
      state,
      action: PayloadAction<Array<Restaurant> | null>
    ) => {
      state.restaurants = action.payload;
    },
    setDishes: (state, action: PayloadAction<Array<Dish> | null>) => {
      state.dishes = action.payload;
    },
    setCategories: (state, action: PayloadAction<Array<Categories>>) => {
      state.categories = action.payload;
    },
    setCategoryQuery: (state, action: PayloadAction<string>) => {
      state.categoryQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAccessToken,
  addCard,
  setUserType,
  setEmail,
  setPassword,
  setName,
  setRePassword,
  setProfileName,
  setProfileNumber,
  setProfileBio,
  setProfilePicture,
  setSearchQuery,
  addRecent,
  deleteRecent,
  addCart,
  deleteCart,
  incrementCartCount,
  decrementCartCount,
  setAddress,
  getCartSubTotal,
  setCarouselImages,
  addFavorite,
  deleteFavorite,
  setUserId,
  setUserInfo,
  setUserAddress,
  deleteAddress,
  setRestaurants,
  setDishes,
  setCategories,
  setCategoryQuery,
  resetCartSubTotal,
} = appSlice.actions;

export default appSlice.reducer;
