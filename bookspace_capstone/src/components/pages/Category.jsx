import React, {useState} from 'react'
import searchService from '../../../services/searchService';


const categories = [
  {name:'Fiction',  image:'/images/Fiction.png'},
  {name:'Non-fiction',  image:'/images/Non-fiction.png'},
  {name:'Mystery',  image:'/images/mystery.png'},
  {name:'Poetry',  image:'/images/poetry.png'},
  {name:'Comics',  image:'/images/comics.png'},
  {name:'Historical',  image:'/images/Historical.png'}
];
 function Category() {
const [books, setBooks] = useState([]);
const [selectCategory, setSelectCategory] = useState("");

const handleSelectCategory = async(category) => {
  setSelectCategory(category);
  const data = await searchService(category);
if (data && data.works) {
  setBooks(data.works);
}else{
  setBooks([]);
}
};

  return (
    <div>
      {/*display categories*/}
<div>
  {categories.map((category) => (
    <div key={category.name} onClick={() => handleSelectCategory(category.name)}>
      <img src={category.name} alt={category.name} />
      <p>{category.name}</p>
      </div>
  ))}
  </div>




{/*dispaly books*/}
<div>
  {selectCategory && <h2>Books in {selectCategory}</h2>}
  {books.length > 0  ?(
    <ul>
      {books.slice(0,5).map((book, index) => (
        <li key={index}>
          <h3>{book.title}</h3>
          <p>Author:{book.authors?.map((author) => author.name).join(',') || 'Unknown'}</p>
        </li>
      ))}
    </ul>
    ):(
      selectCategory && <p className="text-gray-500 mt-3">No books found for this category</p>
    
  )}
</div>
    </div>
  )
}

export default Category;