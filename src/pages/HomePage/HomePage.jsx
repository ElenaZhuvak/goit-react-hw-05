import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList"
import css from './HomePage.module.css'


const HomePage = () => {
  const [movies, setMovies] = useState([])

useEffect(() => {
  const getData = async () => {
    const data = await fetchTrendingMovies()
    setMovies(data)
  }
  getData()
}, [])


  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList movies={movies} className={css.movieList}/>
    </div>
  )
}

export default HomePage