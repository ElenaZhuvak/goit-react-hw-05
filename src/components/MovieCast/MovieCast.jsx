import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

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
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w100${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                src="https://dummyimage.com/100x150/cdcdcd/000.jpg&text=No+photo"
                alt={actor.name}
              />
            )}
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
