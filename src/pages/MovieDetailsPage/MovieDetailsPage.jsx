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
      {movieDetailsImage && 
      (<img src={movieDetailsImage} 
            alt={movieDetails.title} />)}
      {`${movieDetails.title} 
      (${new Date(movieDetails.release_date).getFullYear()})`}
      
      <nav className={css.nav}>
            <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>
            <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
        </nav>
    </div>
  )
}



export default MovieDetailsPage