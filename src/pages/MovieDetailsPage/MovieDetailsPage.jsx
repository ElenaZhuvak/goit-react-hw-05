import { useEffect, useState } from "react"
import { fetchMovieImage, fetchMoviesById } from "../../services/api"
import { NavLink, useParams } from "react-router-dom"
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
    <div>
      {movieDetailsImage && (<img src={movieDetailsImage} alt={movieDetails.title} />)}

      <h1>
        {`${movieDetails.title} ${new Date(movieDetails.release_date).getFullYear()}`}
      </h1>

      <p>User Score: {`${movieDetails.vote_average.toFixed(1)}`}</p>

      <h2>Overview</h2>
      <p>{`${movieDetails.overview}`}</p>

      <p>Genres</p>
      <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
<hr />
      <p>Additional information</p>
      <nav className={css.nav}>
            <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>
            <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
      </nav>
<hr />
    </div>
  )
}



export default MovieDetailsPage