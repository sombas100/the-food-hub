import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

interface Restaurant {
    id: string;
    name: string;
    location: string;
}

interface RestaurantState {
    restaurants: Restaurant[];
    loading: boolean;
    error: string | null;
}

const initialState: RestaurantState = {
    restaurants: [],
    loading: false,
    error: null,
};

export const fetchRestaurants: any = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get('/restaurants');
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.res.data);
        }
    }
);

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRestaurants.fulfilled, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.restaurants = action.payload;
        })
        .addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        });
    },
});

export default restaurantSlice.reducer;