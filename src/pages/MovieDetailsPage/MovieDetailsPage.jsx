import { Suspense, useEffect, useRef, useState } from "react"
import { fetchMoviesById } from "../../services/api"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import css from './MovieDetailsPage.module.css'
import { buildLinkClass } from "../../helpers/buildLinkClass"

const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {

  const [movieDetails, setMovieDetails] = useState(null)
  const {movieId} = useParams()
  const location = useLocation()
  const goBackLink = useRef(location.state ?? '/movies')

  useEffect(() => {
    const getData = async () => {
      const movieDetails = await fetchMoviesById(movieId)
      setMovieDetails(movieDetails)
    }
    getData()
  }, [movieId])
  
  if (!movieDetails) {
    return null
  }
  return (
    <div className={css.container}>
      <Link to={goBackLink.current}>← Go back</Link>

      <div className={css.movieInfo}>
          <img  src={movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`
        : defaultImg
    } alt={movieDetails.title} />

    
          <div className={css.movieContainer}>
            <h1 className={css.movieTitle}>
              {`${movieDetails.title}`} {`(${new Date(movieDetails.release_date).getFullYear()})`}
            </h1>
      
            <p className={css.movieDetail}>User Score: <span className={css.movieScore}>{`${movieDetails.vote_average.toFixed(1)}`}</span></p>
      
            <h2>Overview</h2>
            <p className={css.movieDescription}>{`${movieDetails.overview}`}</p>
      
            <p className={css.movieDetail}>Genres</p>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          </div>
      </div>

        <hr />
      <div>
              <p className={css.movieAddInfoTitle}>Additional information</p>
              <nav className={css.navAddInfo}>
                    <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>
                    <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
              </nav>
      </div>
        <hr />
        <Suspense fallback={<h2>Page is loading...</h2>}>
          <Outlet/>
        </Suspense>

    </div>
  )
}



export default MovieDetailsPage