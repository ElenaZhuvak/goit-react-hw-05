import { useEffect, useState } from "react"
import { fetchMovieReviews } from "../../services/api"
import { useParams } from "react-router-dom"

const MovieReviews = () => {
  const [reviews, setReviews] = useState([])
  const {movieId} = useParams()

  useEffect(() => {
    
    const getData = async () => {
      const dataReviews = await fetchMovieReviews(movieId);
    }
    getData();
    setReviews(dataReviews);
  }, [movieId])
  
  if(!reviews) return `This movie has no reviews yet`

  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieReviews