import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
      <Link to='/'>List of trending movies</Link>
      
      <h2>Ooops... Page is not found!</h2>
    </div>
  )
}

export default NotFound