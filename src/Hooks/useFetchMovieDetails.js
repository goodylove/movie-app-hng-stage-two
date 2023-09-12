import { useEffect, useState } from "react";

function useFetchMovieDetails(id) {
  const [data, setData] = useState();

  const handleFetchMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=786a951536a61a5d74e7595f5007b3aa`
    );
    const movieDetails = await response.json();
    setData(movieDetails);
  };

  useEffect(() => {
    handleFetchMovieDetails();
  }, []);

  return { data };
}

export default useFetchMovieDetails;
