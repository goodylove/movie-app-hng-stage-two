import { useParams } from "react-router-dom";
import MovieDetailsMain from "../../Components/movieDetailsMain";
import MovieDetailsSideBar from "../../Components/movieDetailsSideBar";
import useFetchMovieDetails from "../../Hooks/useFetchMovieDetails";

function MovieDetails() {
  const { id } = useParams();
  const { data } = useFetchMovieDetails(id);
  console.log(data);
  return (
    <main className="flex   h-screen  justify-center gap-10  ">
      <MovieDetailsSideBar />
      <MovieDetailsMain />
    </main>
  );
}

export default MovieDetails;
// https://api.themoviedb.org/3/movie/1396?api_key=786a951536a61a5d74e7595f5007b3aa
