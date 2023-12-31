import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  token: string | null;
  keywords: Array<string> | null;
}

const initialState: AppState = {
  token: null,
  keywords: ['inside', 'best', 'terrible', 'bad'],
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
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setToken,
  setKeyWord,
} = appSlice.actions;

export default appSlice.reducer;
