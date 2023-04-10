import { ApiClient } from '@/services/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const { data } = await ApiClient.get(`/products`);
    return data;
  } catch (error) {
    console.log(error);
    notification.error({
      message: 'Loading products failed',
    });
  }
});

const searchProducts = createAsyncThunk('products/searchProducts', async (value: string) => {
  try {
    const { data } = await ApiClient.get(`/products?name=${value}`);
    return data;
  } catch (error) {
    console.log(error);
    notification.error({
      message: 'Search product failed',
    });
  }
});

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (productId: string) => {
    try {
      const { data } = await ApiClient.get(`/products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      notification.error({
        message: 'Loading product failed',
      });
    }
  }
);

export { getProducts, searchProducts, getProductDetail };
