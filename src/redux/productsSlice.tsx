// redux/productsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Product } from "../types/product";


interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data; // ✅ This must return only the array
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }) => {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      productData
    );
    return response.data; // Returns the newly created product with ID
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number) => {
    await axios.delete(`https://fakestoreapi.com/products/${productId}`);
    return productId; // Return the ID of the deleted product
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }) => {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${productData.id}`,
      productData
    );
    return response.data; // Returns the updated product
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ✅ payload should be an array
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload); // Add new product at beginning
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create product";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        ) // Remove deleted product from the list

      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete product";
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload; // Update the product in the list
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update product";
      });
  },
});

export default productsSlice.reducer;
