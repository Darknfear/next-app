import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppLoadingState {
  isAppLoading: boolean;
}

const initialState: IAppLoadingState = {
  isAppLoading: false,
};

export const appLoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
  },
});

const appLoadingReducer = appLoadingSlice.reducer;
const { setAppLoading } = appLoadingSlice.actions;

export { appLoadingReducer, setAppLoading };
