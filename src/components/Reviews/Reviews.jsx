import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { requestFilmReviews } from 'services/api';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchFilmReviews(id) {
      try {
        const reviews = await requestFilmReviews(id);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchFilmReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({ author, content }) => (
          <li key={nanoid()}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      {reviews.length===0 && <li>We don't have any reviews for this movie</li>}
    </ul>
  );
}
