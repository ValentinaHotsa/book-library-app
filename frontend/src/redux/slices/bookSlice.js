import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";

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

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book");
    if (res.data && res.data.title && res.data.author) {
      dispatch(setAddBook(createBookWithId(res.data, "API")));
    }
  } catch (error) {
    console.log(error);
  }
};

export const selectBooks = (state) => state.books;

export default bookSlice.reducer;
