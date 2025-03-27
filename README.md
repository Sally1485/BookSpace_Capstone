BookSpace - A React-Based Book Exploration App

📖 Overview

BookSpace is a web application built with React that allows users to explore books through a search bar, navigate between different sections using a dynamic navigation bar, and interact with forms for user authentication and data input.

✨ Features

📌 Forms Handling - Includes login and registration forms with input validation.

📌 Navigation Bar - Provides seamless routing between Home, Explore, Details, and Library sections.

📌 Search Functionality - Users can search for books dynamically.

📌 React Router - Used for smooth page navigation.

📌 Tailwind CSS - Styled using Tailwind for a modern UI.

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/yourusername/bookspace.git
cd bookspace

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

Now, open your browser and visit http://localhost:5173/ (if using Vite).

📌 Project Structure

/bookspace
│── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Details.jsx
│   │   ├── Library.jsx
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── README.md

🔹 Working with Forms

Forms are implemented for user login and registration. Example from Home.jsx:

<form>
  <label htmlFor="username">Username:</label>
  <input type="text" id="username" placeholder="Enter username" />
  
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" placeholder="Enter password" />
  
  <button type="submit">Submit</button>
</form>

🔹 Navigation Bar

Navigation is powered by react-router-dom. Example from NavBar.jsx:

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/details">Details</Link>
      <Link to="/library">Library</Link>
    </nav>
  );
}
export default NavBar;

🔹 Search Bar for Books

The search functionality filters books dynamically. Example from SearchBar.jsx:

import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const books = ["Harry Potter", "Lord of the Rings", "The Alchemist"];

  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search books..." onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

🔗 Dependencies

React

React Router (react-router-dom)

Tailwind CSS

📜 License

This project is open-source and available under the MIT License.

💡 Contributing

Feel free to contribute by forking the repo and submitting a pull request!

📞 Contact

For any inquiries, reach out to [Salomey Tackie] at [salomeytackie555@gmail.com].

