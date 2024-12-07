import { useEffect, useState } from "react"
import { fetchMovieImage, fetchMoviesById } from "../../services/api"
import { NavLink, Outlet, useParams } from "react-router-dom"
import css from './MovieDetailsPage.module.css'
import { buildLinkClass } from "../../helpers/buildLinkClass"

const MovieDetailsPage = () => {

  const [movieDetails, setMovieDetails] = useState(null)
  const [movieDetailsImage, setMovieDetailsImage] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    const getData = async () => {
      const movieDetails = await fetchMoviesById(movieId)
      setMovieDetails(movieDetails)
    }
    getData()
  }, [movieId])
  
  useEffect(() => {
    const getData = async () => {
      const moviesImageUrl = await fetchMovieImage(movieDetails.poster_path)
      setMovieDetailsImage(moviesImageUrl)
    }
    getData()
  }, [movieDetails])
  
  if (!movieDetails) {
    return null
  }
  return (
    <div className={css.container}>
      <div className={css.movieInfo}>
          {movieDetailsImage ? 
          (<img src={movieDetailsImage} alt={movieDetails.title} />) :
          (<img src="https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster" alt={movieDetails.title}/>)}
    
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
      <Outlet/>

    </div>
  )
}



export default MovieDetailsPage