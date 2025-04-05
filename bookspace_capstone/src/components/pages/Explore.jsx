import React, { useState } from "react";
import Search from "../Search";
import searchService from "../../../services/searchService";

function Explore() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("");

  const handleCategoryClick = async (category) => {
    setCategory(category);
    try {
      const data = await searchService(category);
      setBooks(data.works || []);
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  return (
    <div className="p-8 bg-slate-600 ">
      <h1 className="text-4xl sm:text-xl md:text-2xl font-serif mt-0 text-orange-600 hover:text-orange-900">
        Explore
      </h1>
      <Search /> {/*importing of search*/}
      <div className="  flex  flex-wrap justify-around gap-4  ">
        <div className=" sm:space-x-1 ">
          <span
            onClick={() => handleCategoryClick("Fiction")}
            className="cursor-pointer sm:mr-10"
          >
            <img
              src={"/images/Fiction.png"}
              alt="fiction image"
              className="h-25 w-25  m-5 "
            />
            <p className="text-wrap text-center text-white">Fiction</p>
          </span>
          <span
            onClick={() => handleCategoryClick("Non-fiction")}
            className="cursor-pointer"
          >
            <img
              src={"/images/Non-fiction.png"}
              alt="non-fiction image"
              className="h-25 w-25 m-5 "
            />
            <p className="text-wrap text-cente text-white">Non-fiction</p>
          </span>
          <span
            onClick={() => handleCategoryClick("Mystery")}
            className="cursor-pointer"
          >
            <img
              src={"/images/mystery.png"}
              alt="mystery image"
              className="h-25 w-25 m-5 "
            />
            <p className="text-wrap text-center  text-white ">Mystery</p>
          </span>
        </div>
        <div>
          <span
            onClick={() => handleCategoryClick("Poetry")}
            className="cursor-pointer"
          >
            <img
              src={"/images/poetry.png"}
              alt="poetry image"
              className="h-25 w-25 m-5"
            />
            <p className="text-wrap text-center text-white">Poetry</p>
          </span>
          <span
            onClick={() => handleCategoryClick("Comics")}
            className="cursor-pointer"
          >
            <img
              src={"/images/comics.jpg"}
              alt="comics image"
              className="h-25 w-25 m-5"
            />
            <p className="text-wrap text-center  text-white ">Comics</p>
          </span>
          <span
            onClick={() => handleCategoryClick("Historical")}
            className="cursor-pointer"
          >
            <img
              src={"/images/Historical.jpg"}
              alt="Historical image"
              className="h-25 w-25m-5 "
            />
            <p className="text-wrap text-center text-white">Historical</p>
          </span>
        </div>
      </div>
      {/* Display books based on selected category */}
      <div className="mt-8">
        {category && (
          <h2 className="text-2xl text-white mb-4">
            Books in {category} category:
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-gray-700">
                  {book.authors
                    ? book.authors.map((author) => author.name).join(", ")
                    : "Unknown Author"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white">No books found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
