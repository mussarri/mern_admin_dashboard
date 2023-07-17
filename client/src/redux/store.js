import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice.js";
import { api } from "./api.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


const store = configureStore({
  reducer: {
    mode: modeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
