import React, { useState } from "react";
import searchService from "../../services/searchService";
import { useNavigate } from "react-router-dom";

function Search() {
  const [find, setFind] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("searching for...", find);
    try {
      const data = await searchService(find);
      console.log("search results", data);
      setResults(data?.docs || []);
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  };
  const handleChange = (e) => {
    setFind(e.target.value);
    console.log("Current search term:", e.target.value);
  };
  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex  mt-10  justify-center">
        <input
          type="text"
          id="search"
          name="search"
          value={find}
          onChange={handleChange}
          className="px-6 py-4 border border-gray-300 rounded-md w-full "
        />
        <button
          type="submit"
          className='bg-red-500 hover:bg-teal-600 transform hover:-translate-y-1 hover:scale-110 ...">
  Hover me rounded-xl'
        >
          Search
        </button>
      </form>
      <div className="mt-6">
        {results.length > 0 && (
          <ul>
            {Results.map((book) => (
              <li
                key={book.key}
                onClick={() => handleBookClick(book.key)}
                className="cursor-pointer text-blue-500 hover:text-blue-700"
              >
                {book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
