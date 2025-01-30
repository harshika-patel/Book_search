import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './DetailsPage.scss';

const DetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (loading) return <div>Loading book details...</div>;

  return (
    <div className="details-page">
      <Link to="/" className="back-link">← Back to Bestsellers</Link>
      {book && (
        <div className="book-details">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder-book.jpg'}
            alt={book.volumeInfo.title}
          />
          <div className="details-content">
            <h1>{book.volumeInfo.title}</h1>
            <p className="authors">by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
            <p className="description">{book.volumeInfo.description || 'No description available'}</p>
            <div className="meta-info">
              <p>Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
              <p>Published: {book.volumeInfo.publishedDate || 'Unknown'}</p>
              <p>Pages: {book.volumeInfo.pageCount || 'Unknown'}</p>
              {book.volumeInfo.previewLink && (
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                  Preview Book
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;