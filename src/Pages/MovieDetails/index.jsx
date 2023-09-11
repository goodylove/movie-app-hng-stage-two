import MovieDetailsMain from "../../Components/movieDetailsMain";
import MovieDetailsSideBar from "../../Components/movieDetailsSideBar";

function MovieDetails() {
  return (
    <main className="flex  w-full justify-center gap-10  overflow-x--hidden ">
      <MovieDetailsSideBar />
      <MovieDetailsMain />
    </main>
  );
}

export default MovieDetails;
