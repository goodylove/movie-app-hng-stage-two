import { useEffect, useState } from "react";

function useFetchMovies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchMovies = async function () {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=786a951536a61a5d74e7595f5007b3aa"
      );
      const movie = await response.json();

      setData(movie.results);
    } catch (error) {
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

  return { data, loading };
}

export default useFetchMovies;
