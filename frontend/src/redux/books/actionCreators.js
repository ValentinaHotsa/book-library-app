import * as action from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: action.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id) => {
  return {
    type: action.DELETE_BOOK,
    payload: id,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: action.TOGGLE_FAVORITE,
    payload: id,
  };
};
