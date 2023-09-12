import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Button from "./../Button/index";
import { Link } from "react-router-dom";

function MovieCard({ item }) {
  const [toogleFavoriteIcon, setToggleFavoriteIcon] = useState();

  const handleSaveFavorites = () => {
    setToggleFavoriteIcon((prev) => !prev);
  };
  return (
    // movie card
    <div
      className="w-[250px] h-[490px] cursor-pointer"
      data-testid="movie-card"
    >
      {/* favourite icon */}

      <div
        className=" bg-slate-400 h-5  w-5 rounded-full  flex justify-center items-center   absolute   ml-48 mt-6  cursor-pointer"
        onClick={handleSaveFavorites}
      >
        {toogleFavoriteIcon ? (
          <MdFavorite className="" />
        ) : (
          <MdFavoriteBorder className="text-white text-md     " />
        )}
      </div>

      {/* movie poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.name}
        className="w-[250px] h-[370px] "
        data-testid="movie-poster"
      />
      {/* movie release data */}
      <h4
        className="text-[12px] leading-[15.62px] my-3"
        data-testid="movie-release-date"
      >
        {item.origin_country[0] ?? "Us"}, {item.first_air_date}
      </h4>

      {/* movie title */}
      <h2
        className="leading-[23.44px] text-[18px] font-[700]"
        data-testid="movie-title"
      >
        {item.name}
      </h2>

      <div className="flex gap-8 text-[10px] my-2">
        <div className="flex items-center gap-2">
          <img src="/assets/imb.png" alt="" />
          <span>850/100</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="/assets/PngItem.png" alt="" />
          <span>76%</span>
        </div>
      </div>

      <Link to={`/moviedetails/${item.id}`}>
        <Button className="text-[12px] leading-[15.62px] bg-black text-white p-1 rounded">
          View More
        </Button>
      </Link>
    </div>
  );
}

export default MovieCard;
