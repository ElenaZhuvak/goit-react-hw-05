import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import HomePage from "../pages/HomePage/HomePage"
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import NotFound from "../pages/NotFound/NotFound"
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"
import MovieReviews from "./MovieReviews/MovieReviews"
import MovieCast from "./MovieCast/MovieCast"
import css from './App.module.css'

const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />

        <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
          <Route path='reviews' element={<MovieReviews />}/>
          <Route path='cast' element={<MovieCast />}/>
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App