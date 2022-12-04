import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});


export const { login, logout } = userSlice.actions;

// Hook per recuperare i dati dell'utente dallo store redux
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;