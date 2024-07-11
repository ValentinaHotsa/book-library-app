import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  },
});

export default store;
