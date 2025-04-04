import React,{useState, useEffect} from 'react'

function Details({book}) {
  const [savedBooks, setSavedBooks] = useState([]); 

const saveToLibrary = () => {
  if (!book) return;
  const alreadySaved = savedBooks.some((saved) => saved.title ===book.title);
 if(!alreadySaved) {
const updatedBooks = [...savedBooks, book];
setSavedBooks(updatedBooks);
localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
 } 
};
 useEffect(()=>{
    const storedBooks =JSON.parse(localStorage.getItem("savedBooks")) || []; setSavedBooks(storedBooks);
  }, []);
 
  return (
    <div>
      
          <h1>{book?.name}</h1>
              <p>{book?.description}</p>
              <p>Publication:{book?.publication} </p>
              <p>ISBN:{book?.ISBN}</p>
              <p>Number of Pages:{book?.numberOfPages}</p>
              <p>Subject:{book?.subject}</p>
        
        <button 
                  onClick={saveToLibrary} 
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                  Save to Library
                </button>
            {/*Dispaly saved books*/} 
            {savedBooks.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Saved Books</h2>
          <ul className="list-disc list-inside">
            {savedBooks.map((savedBook, index) => (
              <li key={index} className="text-gray-700">{savedBook.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
}

export default Details;