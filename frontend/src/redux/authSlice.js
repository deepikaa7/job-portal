import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  loading: false,
  user: null,
};

// Create authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // Manage loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Store logged-in user details
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // Clear user details during logout
    setUserLogout: (state) => {
      state.user = null;
    },
  },
});

// Export actions
export const { setLoading, setUser, setUserLogout } = authSlice.actions;

// Export reducer
export const authSliceReducer = authSlice.reducer;
export default authSlice.reducer;