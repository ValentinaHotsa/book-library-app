import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
