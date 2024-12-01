import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import HomePage from "../pages/HomePage/HomePage"
import MoviesPage from "../pages/MoviesPage/MoviesPage"

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
      </Routes>
    </div>
  )
}

export default App