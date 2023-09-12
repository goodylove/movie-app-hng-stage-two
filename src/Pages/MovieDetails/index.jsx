import MovieDetailsMain from "../../Components/movieDetailsMain";
import MovieDetailsSideBar from "../../Components/movieDetailsSideBar";

function MovieDetails() {
  return (
    <main className="flex   h-screen  justify-center gap-10  ">
      <MovieDetailsSideBar />
      <MovieDetailsMain />
    </main>
  );
}

export default MovieDetails;
