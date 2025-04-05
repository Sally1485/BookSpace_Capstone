import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../../services/searchService";

function Details() {
  const [savedBooks, setSavedBooks] = useState([]);
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookDetails(id);
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id]);

  useEffect(() => {
    const storedBooks = localStorage.getItem("savedBooks");
    setSavedBooks(storedBooks ? JSON.parse(storedBooks) : []);
  }, []);

  const saveToLibrary = () => {
    if (!book) return;

    const alreadySaved = savedBooks.some((saved) => saved.title === book.title);
    if (!alreadySaved) {
      const updatedBooks = [...savedBooks, book];
      setSavedBooks(updatedBooks);
      localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
    }
  };

  return (
    <div className="p-8 bg-slate-600 h-screen w-full">
      <h1 className=" text-3xl font-serif text-rose-500 hover:text-rose-800">
        Display
      </h1>
      {book ? (
        <>
          <div class=" flex-col max-auto text-justify space-y-11 text-xl">
            <h2>{book?.title}</h2>
            <p>{book?.description}</p>
            <p>Publication:{book?.publication} </p>
            <p>ISBN:{book?.ISBN}</p>
            <p>Number of Pages:{book?.numberOfPages}</p>
            <p>Subject:{book?.subject}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={saveToLibrary}
              className="mt-4 bg-green-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
            >
              Save to Library
            </button>
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}

      {/*Dispaly saved books*/}
      {savedBooks.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Saved Books</h2>
          <ul className="list-disc list-inside">
            {savedBooks.map((savedBook, index) => (
              <li key={index} className="text-gray-700">
                {savedBook.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Details;
