import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

interface AuthState {
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
};

export const login: any = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('/auth/login', credentials);
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.res.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
            state.loading = false;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        })
        .addCase(login.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;