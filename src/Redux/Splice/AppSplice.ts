import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo, ProfileType, USER_TYPE } from "../../../type";

interface AppState {
  token: string | null;
  keywords: Array<string> | null;
  availableCards: null | Array<CardInfo>;
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
}

const initialState: AppState = {
  token: null,
  keywords: ["inside", "best", "terrible", "bad"],
  userType: null,
  availableCards: [
    {
      type: "master",
      cvc: "",
      expiryDate: "12/24",
      holderName: "John Osamakhue",
      number: "47662873623879327594",
    },
    {
      type: "visa",
      cvc: "",
      expiryDate: "12/24",
      holderName: "Osato Uyimwen",
      number: "47662873623879327458",
    },
    {
      type: "master",
      cvc: "",
      expiryDate: "12/24",
      holderName: "Prince Odubowa",
      number: "476628736238793275590",
    },
    {
      type: "visa",
      cvc: "",
      expiryDate: "12/24",
      holderName: "Janet Idemudia",
      number: "476628736238793272736",
    },
  ],
  email: "",
  password: "",
  name: "",
  rePassword: "",
  userProfile: null,
  profileName: "",
  profileNumber: "",
  profileBio: "",
  profilePicture: "",
};

export const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setKeyWord: (state, action: PayloadAction<string>) => {
      const exists = state.keywords?.join().includes(action.payload);
      if (!exists) {
        state.keywords?.push(action.payload);
      } else {
        return;
      }
    },
    // addCard: (state, action: PayloadAction<CardInfo>) => {
    //   const exist = (card: CardInfo) =>
    //   state.availableCards?.filter(
    //     (cardItem) =>
    //       card &&
    //       card?.toLowerCase().includes(searchQuery?.toLowerCase())
    //   );
    // }
    addCard: (state, action: PayloadAction<CardInfo>) => {
      state.availableCards?.push(action.payload);
    },
    setUserType: (state, action: PayloadAction<USER_TYPE>) => {
      state.userType = action.payload;
      // console.log("State" + state.userType);
      // console.log("Payload" + action.payload);
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setAccessToken,
  setKeyWord,
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
} = appSlice.actions;

export default appSlice.reducer;
