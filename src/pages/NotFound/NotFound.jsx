import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      
        <h2>Ooops... Page is not found!</h2>
    </div>
  )
}

export default NotFound