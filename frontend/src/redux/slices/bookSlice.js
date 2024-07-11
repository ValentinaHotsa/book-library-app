import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
});
export const { setAddBook, setDeleteBook, setToggleFavorite } =
  bookSlice.actions;

export const selectBooks = (state) => state.books;

export default bookSlice.reducer;
