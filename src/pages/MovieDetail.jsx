import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { useQuery } from '../hooks/useQuery';
import styles from '../styles/MovieDetail.module.css'
import get from '../utils/httpClient';

export default function MovieDetail() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get(`/movie/${movieId}`)
      .then(data => {
        setIsLoading(false);
        setMovie(data);
      })
  },[movieId])
  
  if(isLoading){
    return <Spinner></Spinner>;
  }

  if(!movie){
    return null
  }

  const imgServer = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  return (
    <div
      className={styles.detailsContainer}>
      <img
        className={styles.col + " " + styles.movieImage}
        src={imgServer}
        alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p><strong>Title:</strong> {movie.title}</p>
        <p key={"movie" + movie.id}>
          {movie.genres.map(item => item.name).join(', ')}
        </p>
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  )
}
