import { createSlice } from '@reduxjs/toolkit';

import { TProductDetail } from '@/types/product-types';
import { getProducts, getProductDetail, searchProducts } from './async-actions';

interface IProductState {
  products: TProductDetail[];
  productsDetails?: TProductDetail;
}

const initialState: IProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.productsDetails = action.payload;
    });
  },
});

const productReducer = productSlice.reducer;

export { productReducer, getProducts, searchProducts, getProductDetail };
