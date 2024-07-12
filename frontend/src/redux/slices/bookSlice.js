import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";
import { setError } from "./errorSlice";

const initialState = {
  books: [],
  isLoadingApi: false,
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.books.push(action.payload);
    },
    setDeleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    setToggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      //   return state.books.map((book) =>
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   );
    },
  },
  extraReducers: {
    [fetchBook.pending]: (state) => {
      state.isLoadingApi = true;
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.isLoadingApi = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, "API"));
      }
    },
    [fetchBook.rejected]: (state) => {
      state.isLoadingApi = false;
    },
  },
  // // Option 2
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.pending, (state) => {
  //     state.isLoadingApi = true;
  //   });
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     state.isLoadingApi = false;

  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithId(action.payload, "API"));
  //     }
  //   });
  //   builder.addCase(fetchBook.rejected, (state) => {
  //     state.isLoadingApi = false;
  //   });
  // },
});

export const { setAddBook, setDeleteBook, setToggleFavorite } =
  bookSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingApi = (state) => state.books.isLoadingApi;

export default bookSlice.reducer;
