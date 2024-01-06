import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardInfo {
  type: string;
  number: string;
  expiryDate: string;
  cvc: string;
  holderName: string; 
}

interface AppState {
  token: string | null;
  keywords: Array<string> | null;
  availableCards: null | Array<CardInfo>
}

const initialState: AppState = {
  token: null,
  keywords: ['inside', 'best', 'terrible', 'bad'],
  availableCards: [
    {
      type: 'master',
      cvc: '',
      expiryDate: '12/24',
      holderName: 'John Osamakhue',
      number: '47662873623879327594'
    },
    {
      type: 'visa',
      cvc: '',
      expiryDate: '12/24',
      holderName: 'Osato Uyimwen',
      number: '47662873623879327458'
    },
    {
      type: 'master',
      cvc: '',
      expiryDate: '12/24',
      holderName: 'Prince Odubowa',
      number: '476628736238793275590'
    },
    {
      type: 'visa',
      cvc: '',
      expiryDate: '12/24',
      holderName: 'Janet Idemudia',
      number: '476628736238793272736'
    },
  ],
};

export const appSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setKeyWord: (state, action: PayloadAction<string>) => {
      const exists = state.keywords?.join().includes(action.payload);
      if(!exists) {
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
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setToken,
  setKeyWord,
  addCard,
} = appSlice.actions;

export default appSlice.reducer;
