// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BestsellersGrid.scss';

// const BestsellersGrid = () => {
//   const [bestsellers, setBestsellers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBestsellers = async () => {
//       try {
//         const nytResponse = await axios.get(
//           `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
//         );

//         const nytBooks = nytResponse.data.results.books;
//         const googleBooks = [];

//         for (const nytBook of nytBooks.slice(0, 12)) {
//           const isbn = nytBook.isbns?.[0]?.isbn10;
//           if (isbn) {
//             try {
//               const googleResponse = await axios.get(
//                 `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
//               );

//               if (googleResponse.data.items?.[0]) {
//                 googleBooks.push(googleResponse.data.items[0]);
//               }
//             } catch (googleError) {
//               console.error(`Error fetching Google data for ISBN ${isbn}:`, googleError);
//             }
//           }
//         }

//         setBestsellers(googleBooks);
//       } catch (error) {
//         setError('Failed to load bestsellers');
//         console.error('API Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBestsellers();
//   }, []);

//   if (loading) return <div className="loading">Loading NYT Bestsellers...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="bestsellers-grid">
//       {bestsellers.map((book) => (
//         <div key={book.id} className="book-card">
//           <Link to={`/book/${book.id}`}>
//             <img
//               src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder-book.jpg'}
//               alt={book.volumeInfo.title}
//             />
//             <h3>{book.volumeInfo.title}</h3>
//             <p className="author">
//               {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
//             </p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BestsellersGrid;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './BestsellersGrid.scss';

const BestsellersGrid = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const nytResponse = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
        );

        const nytBooks = nytResponse.data.results.books;
        const googleBooks = [];

        for (const nytBook of nytBooks.slice(0, 12)) {
          const isbn = nytBook.isbns?.[0]?.isbn10;
          if (isbn) {
            try {
              const googleResponse = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
              );
              if (googleResponse.data.items?.[0]) {
                googleBooks.push(googleResponse.data.items[0]);
              }
            } catch (googleError) {
              console.error(`Error fetching ISBN ${isbn}:`, googleError);
            }
          }
        }
        setBestsellers(googleBooks);
      } catch (error) {
        setError('Failed to load bestsellers');
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  if (loading) return <div className="loading">Loading NYT Bestsellers...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="bestsellers-grid">
      {bestsellers.map((book, index) => (
        <div key={book.id} className="book-card">
          <Link to={`/book/${book.id}`}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder-book.jpg'}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p className="author">{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BestsellersGrid;

