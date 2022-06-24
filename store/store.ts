import {configureStore} from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import {createWrapper} from "next-redux-wrapper";

export const makeStore = () => configureStore({
  reducer: {
    projects: projectsReducer,
  },
})

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true });