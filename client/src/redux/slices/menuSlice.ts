import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface MenuState {
    menuItems: MenuItem[];
    loading: boolean;
    error: string | null;
}

const initialState: MenuState = {
    menuItems: [],
    loading: false,
    error: null,
};

export const fetchMenuItems: any = createAsyncThunk(
    'menu/fetchMenuItems',
    async(restaurantId: string, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get(`/restaurants/${restaurantId}/menu`);
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.res.data);
        }
    }
);


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMenuItems.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMenuItems.fulfilled, (state, action) => {
            state.loading = false;
            state.menuItems = action.payload;
        })
        .addCase(fetchMenuItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});

export default menuSlice.reducer;