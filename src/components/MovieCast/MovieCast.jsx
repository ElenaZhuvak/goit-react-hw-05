import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const dataCast = await fetchMovieCast(movieId);
      setCast(dataCast);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={actor.profile_path
              ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
              : defaultImg} alt={actor.original_name} />
            <div>
              <h4>{actor.original_name}</h4>
              <p>Character:{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
