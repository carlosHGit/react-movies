import styles from '../styles/MovieCard.module.css'
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const movie = props.movie;
  const imgServer = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
      <li className={styles.movieCard} >
        <Link to={`/movies/${movie.id}`}>
          <img
            width={230}
            height={345}
            src={`${imgServer}${movie.poster_path}`}
            alt={movie.original_title} />
        </Link>
        <div>
          <p>
            {movie.title}
          </p>
        </div>
      </li>
    </>
  )
}
