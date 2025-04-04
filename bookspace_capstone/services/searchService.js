import axios from 'axios';
const bookApi = 'https://openlibrary.org/search.json';


const searchService = async(query) => {
    try {
    const response = await axios.get(`${bookApi}?q=title=${encodeURIComponent(query)}`);
  console.log('API Response:', response.data)
    return  response.data;
    }catch(error) {
        console.error('something went wrong while fetching book data', error)
    }
  
};

export default searchService;