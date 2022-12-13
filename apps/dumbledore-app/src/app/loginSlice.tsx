import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      login: (state, action) => {
          state.loggedIn = true;
          return state;
      },
      logout: (state, action) => {
        state.loggedIn = false;
      },
    },
  })
  
  export const { login, logout } = loginSlice.actions
  