import * as action from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: action.ADD_BOOK,
    payload: newBook,
  };
};
