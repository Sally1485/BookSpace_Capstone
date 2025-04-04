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
        <button type='submit'  className='bg-red-500 rounded-xl'>Search</button>
        
        </form>
    
  )
}

export default Search