import { Link } from "react-router-dom"
import css from './NotFound.module.css'


const NotFound = () => {
  return (
    <div className={css.notFoundPage}>
        <h2>Ooops... Page is not found!</h2>
        <Link to='/'>List of trending movies</Link>
    </div>
  )
}

export default NotFound