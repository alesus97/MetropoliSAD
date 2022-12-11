import { createSlice } from "@reduxjs/toolkit";
import {Amplify} from "aws-amplify";
import awsmobile from "../aws-exports";

Amplify.configure(awsmobile)

const identityPoolCredentials = JSON.parse(localStorage.getItem("IdentityPoolCredentials"));
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

export const userSlice = createSlice({
  name: "user",

  initialState: {
    user: (!identityPoolCredentials || !userInfo) ? null : {
      ...userInfo,
      tokens: {
        accessKeyId: identityPoolCredentials?.AccessKeyId,
        secretAccessKey: identityPoolCredentials?.SecretKey,
        sessionToken: identityPoolCredentials?.SessionToken,
      }
    } 
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