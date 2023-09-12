import { useParams } from "react-router-dom";
import MovieDetailsMain from "../../Components/movieDetailsMain";
import MovieDetailsSideBar from "../../Components/movieDetailsSideBar";
import useFetchMovieDetails from "../../Hooks/useFetchMovieDetails";
import SorryImg from "../../assets/download.jfif";

function MovieDetails() {
  const { id } = useParams();
  const { data } = useFetchMovieDetails(id);
  console.log(data);
  return (
    <>
      {data?.title && (
        <main className="flex   h-screen  justify-center gap-10  ">
          <MovieDetailsSideBar />
          <MovieDetailsMain data={data} />
        </main>
      )}
      {data?.title ?? (
        <div className="h-screen flex justify-center items-center flex-col font-[400] ">
          <img src={SorryImg} alt="" />
          "Opps movie details not available"
        </div>
      )}
    </>
  );
}

export default MovieDetails;
