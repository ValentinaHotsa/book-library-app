import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";

const initialState = [];

export const fetchBook = createAsyncThunk("books/fetchBook", async () => {
  const res = await axios.get("http://localhost:4000/random-book");
  return res.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.push(action.payload);
    },
    setDeleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    setToggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      //   return state.map((book) =>
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, "API"));
      }
    });
  },
});

export const { setAddBook, setDeleteBook, setToggleFavorite } =
  bookSlice.actions;

export const selectBooks = (state) => state.books;

export default bookSlice.reducer;
