import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import restaurantReducer from './slices/restaurantSlice';
import menuReducer from './slices/menuSlice';
import cartReducer from './slices/cartSlice';





const store = configureStore({
    reducer: {
        auth: authReducer,
        restaurant: restaurantReducer,
        menu: menuReducer,
        cart: cartReducer,
    },
})