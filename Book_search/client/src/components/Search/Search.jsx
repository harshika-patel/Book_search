import './Search.scss';
import React, { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data.items || []);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    }
    setLoading(false);
  };
    return(
        <div className="search" >
        <div className='search__box' > 
            <input type="text" placeholder="Search for a book" className='search__input' value={query}
          onChange={(e) => setQuery(e.target.value)}/>
            <button className='search__button' onClick={handleSearch}>Search</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-4 border p-2 rounded">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="mb-2" />
            <h3 className="font-semibold">{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <a
              href={book.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              More Info
            </a>
          </li>
        ))}
      </ul>
        </div>
    )
}
export default Search;