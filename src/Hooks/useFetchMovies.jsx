import { useEffect, useState } from "react";
import { API_KEY } from "./useFetchMovieDetails";

function useFetchMovies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFetchMovies = async function () {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );

      const movie = await response.json();
      if (movie.success === false) {
        setError(movie.status_message);
        return;
      }

      setData(movie.results);
    } catch (error) {
      setError(error.message);
      console.log("Error: " + error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      handleFetchMovies();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
}

export default useFetchMovies;
