import { Link } from "react-router-dom"
import css from './MovieList.module.css'

const MovieList = ({movies}) => {
  return (
    <div>
        <ul className={css.movieList}>
        {movies.map(movie => <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link> 
        </li>)}
      </ul>
    </div>
  )
}

export default MovieList