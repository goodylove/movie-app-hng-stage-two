import { useEffect, useState } from "react";

function useFetchMovieDetails(id) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=786a951536a61a5d74e7595f5007b3aa`
      );
      const movieDetails = await response.json();

      if (movieDetails.success === false) {
        setError(movieDetails.status_message);
        return;
      }

      setData(movieDetails);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      handleFetchMovieDetails();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
}

export default useFetchMovieDetails;
