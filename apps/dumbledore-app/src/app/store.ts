import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { caseSlice } from './caseSlice';
import { loginSlice } from './loginSlice';

export const store = configureStore({
  reducer: {
    mycase: caseSlice.reducer,
    secondReducer: loginSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch