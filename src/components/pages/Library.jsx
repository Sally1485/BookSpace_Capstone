import React, { useState, useEffect } from "react";

function Library() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("savedBook")) || [];
    setSaved(storedBooks);
  }, []);

  return (
    <div className="p-8 bg-slate-600 h-screen w-full">
      <h1 className="text-2xl text-red-800 hover:text-rose-600 mb-4 font-serif">
        My Library
      </h1>
      {/* Display saved books */}
      <div className="mt-8">
        {saved.length > 0 ? (
          <div>
            <h2 className="text-2xl text-white mb-4 font-serif">
              Your Library:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {saved.map((book, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="text-gray-700">
                    {book.authors
                      ? book.authors.map((author) => author.name).join(", ")
                      : "Unknown Author"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-2xl">No books saved yet</p>
        )}
      </div>
    </div>
  );
}

export default Library;
