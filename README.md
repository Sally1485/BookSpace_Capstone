BookSpace - A React-Based Book App

BookSpace is a web application built with React that allows users to explore books through a search bar, navigate between different sections using a dynamic navigation bar, and interact with forms for user authentication and data input.

# React + Vite

📖 Overview

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

✨ Features

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

📌 Forms Handling - Includes authentication of user using email and password.

📌 Navigation Bar - Provides seamless routing between Home, Explore, Details, and Library sections.

📌 Search Functionality - Users can search for books dynamically and through categories of genres of book.

📌 React Router - Used for smooth page navigation.

📌Details Page - Used to view detailed book information

📌 FireBase - For Authenication of user

📌 Axios - For ensure fetching of API using https

📌 Tailwind CSS - Styled using Tailwind for a modern UI.

📌 Query Client Provider - Ensure fetching of data

📌 Powered by the Open Library API

🚀 Demo
The link below is the demo of the app;
https://book-space-capstone-55-git-main-salomey-tackies-projects.vercel.app/

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/yourusername/bookspace.git

cd Bookspace_Capstone

2️⃣ Install Dependencies

npm install create vite@latest bookspace_capstone

npm install react-router

npm install Tailwindcss@3 postcss

npm install firebase

npm install axios

3️⃣ Start the Development Server

npm run dev

Now, open your browser and visit http://localhost:5173/ (if using Vite).

📌 Project Structure

/bookspace

│── src/

│ ├── components/

    |──pages/

│ │ ├── Forms

| │ │ ├──SignUpForm.jsx

| │ │ ├──SignInForm.jsx

│ │ ├── NavBar.jsx

│ │ ├── SearchBar.jsx

│ │ ├── Home.jsx

│ │ ├── Explore.jsx

│ │ ├── Details.jsx

│ │ ├── Library.jsx

│ │ ├──SignUpPage.jsx

│ │ ├──SignInForm.jsx

│ ├──Config

| | ├──Firebase

│ ├── App.jsx

│ ├── main.jsx

│── public/

|──services

|──SearchService.js

|──SignUpService.js

│── package.json

│── README.md

🔹 Working with Forms

Forms are implemented for user email and password using firebase. Example from Home.jsx:

<form>


<label htmlFor="email">Email:</label>

  <input type="text" id="email"  />


<label htmlFor="password">Password:</label>

  <input type="password" id="password" />
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

import React, {useState} from 'react'

import searchService from '../../services/searchService';

function Search() {

    const [find, setFind] = useState("");

const handleSubmit = async(e) => {

    e.preventDefault()


    console.log('searching for...', find);


    try {


        const data = await searchService(find);


        console.log('search results', data)


    } catch (error) {


        console.log('Error fetching search results:', error)


    }

};

const handleChange = (e) => {

    setFind(e.target.value)


    console.log("Current search term:", e.target.value);

};

return (

        <form onSubmit={handleSubmit} className='flex  mt-10  justify-center'>


        <input type="text" id='search' name='search' value={find}  onChange={handleChange} className='px-6 py-4 border border-gray-300 rounded-md w-full ' />


        <button type='submit'  className='bg-red-500 rounded-xl'>Search</button


        </form>

)

}

export default Search

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

Firebase

Axios

Install dependencies:
npm run dev

Build For Production:
npm run build

Known Issues

1. Bug issue is navigation failed to move to the detailed page to get book information from search results

2. Bug issue is failure to obtained the list of books under each categories of books

📜 License

This project is open-source and available under the MIT License.

💡 Contributing

Feel free to contribute by forking the repo and submitting a pull request!

📞 Contact

For any inquiries, reach out to [Salomey Tackie] at [salomeytackie555@gmail.com].
