import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchMoviesByQuery } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList"

const initialValues = {
  query: '',
}

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!query) {
      return
    }

    const getData = async () => {
      const data = await fetchMoviesByQuery(query)
      setMovies(data)
    }
    getData()
  }, [query])
  


  const handleSubmit =(values, actions) => {
    setSearchParams(values.query ? {q: values.query} : {})
    actions.resetForm()
  }
  
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>    
      <Form>
      <label>
        Search movie
        <Field name='query'/>
      </label>
      <button type='submit'>Search</button>
        </Form>
      </Formik>

      <MovieList movies={movies}/>

    </div>
  )
}

export default MoviesPage