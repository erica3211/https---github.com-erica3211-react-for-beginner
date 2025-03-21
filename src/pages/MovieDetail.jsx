import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBackHome from "../components/GoBackHome";
function MovieDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <GoBackHome page={"/movieList"} />
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <p>평점 : {movie.rating}</p>
          <ul>
            장르
            {movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default MovieDetail;
