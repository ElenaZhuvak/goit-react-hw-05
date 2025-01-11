import { Link } from "react-router-dom"
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.notFoundPage}>
        <h2>Ooops... Page is not found!</h2>
        <Link to='/'>List of trending movies</Link>
    </div>
  )
}

export default Navigation