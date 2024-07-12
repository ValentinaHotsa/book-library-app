# Book Library App

## Description

Book Library App is a small educational React application that uses Redux. You can add books manually through input fields, add a random book from a JSON file, or use an API to add a random book. The server is in the same repository; to run it, you need to open the project and start the server locally. You can filter books by author, title, and favorites. Each book in the list can be deleted and added to favorites.

## Live Demo

You can see the live demo of the application [here](https://valentinahotsa.github.io/book-library-app/).

## Features

- Add a book manually: Enter the book title and author through input fields and add the book to the library.
- Add a random book from JSON file: Click a button to randomly pick a book from a local JSON file.
- Add a random book via API: Click a button to randomly pick a book via an API request.
- Filter books: Filter books by author, title, or favorites.
- Delete a book: Remove a book from the list.
- Add a book to favorites: Mark a book as a favorite for easy access.

## Project Structure

- frontend/ — client-side of the application (React).
- api/ — server-side of the application (Node.js, Express).
- frontend/src/books.json — local JSON file with books.
- api/books.json — local JSON file on the server.

## Technologies

- React
- Redux
- Node.js
- Express
- Cors

## Installation and Setup

### Client-side

1.  Clone the repository to your local machine:

```
git clone https://github.com/ValentinaHotsa/book-library-app
```

2. Navigate to the frontend directory:

```
cd frontend
```

3. Install dependencies:

```
npm install
```

4. Start the application:

```
npm start
```

### Server-side (Runs Locally Only)

1.  Navigate to the server directory:

```
cd api
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
    npm start
```

The server will run locally and be available at http://localhost:4000.
