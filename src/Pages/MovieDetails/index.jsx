import { useNavigate, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import MovieDetailsMain from "../../Components/movieDetailsMain";
import MovieDetailsSideBar from "../../Components/movieDetailsSideBar";
import useFetchMovieDetails from "../../Hooks/useFetchMovieDetails";
import SorryImg from "../../assets/download.jfif";
import Loader from "../../Components/Loader";

function MovieDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetchMovieDetails(id);

  const navigate = useNavigate();

  console.log(data);
  return (
    <>
      <BsFillArrowLeftCircleFill
        className="text-[30px] ml-5 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {loading && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}

      {error && data === undefined ? (
        <div className="h-screen flex justify-center items-center flex-col font-[400] ">
          <img src={SorryImg} alt="" />
          <span>{error} </span>
        </div>
      ) : (
        ""
      )}

      {data !== undefined && (
        <main className="flex   h-screen  justify-center gap-10  ">
          <MovieDetailsSideBar />
          <MovieDetailsMain data={data} />
        </main>
      )}
    </>
  );
}

export default MovieDetails;
