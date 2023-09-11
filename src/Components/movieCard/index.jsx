import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function MovieCard() {
  const [toogleFavoriteIcon, setToggleFavoriteIcon] = useState(false);
  return (
    // movie card
    <div className="w-[250px] h-[490px]" data-testid="movie-card relative">
      {/* favourite icon */}

      <div
        className=" bg-slate-400 h-5  w-5 rounded-full  flex justify-center items-center   absolute   ml-48 mt-6  cursor-pointer"
        onClick={() => setToggleFavoriteIcon((prev) => !prev)}
      >
        {toogleFavoriteIcon ? (
          <MdFavorite className="" />
        ) : (
          <MdFavoriteBorder className="text-white text-md  " />
        )}
      </div>

      {/* movie poster */}
      <img
        src="/assets/Poster.png"
        alt=""
        className="w-[250px] h-[370px] "
        data-testid="movie-poster"
      />
      {/* movie release data */}
      <h4
        className="text-[12px] leading-[15.62px] my-3"
        data-testid="movie-release-date"
      >
        USA, 2016 - Current
      </h4>

      {/* movie title */}
      <h2
        className="leading-[23.44px] text-[18px] font-[700]"
        data-testid="movie-title"
      >
        Stranger Things
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

      <span className="text-[12px] leading-[15.62px]">
        Action, Adventure, Horror
      </span>
    </div>
  );
}

export default MovieCard;
