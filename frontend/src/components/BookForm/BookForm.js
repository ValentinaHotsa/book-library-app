import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";
import { setAddBook } from "../../redux/slices/bookSlice";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(setAddBook(createBookWithId({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(setAddBook(createBookWithId(randomBook, "random")));
  };

  const handleAddRandomBookViaApi = async () => {
    try {
      const res = await axios.get("http://localhost:4000/random-book");
      if (res.data && res.data.title && res.data.author) {
        dispatch(setAddBook(createBookWithId(res.data, "API")));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaApi}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
