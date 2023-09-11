function MovieCard() {
  return (
    // movie card
    <div className="w-[250px] h-[490px]" data-testid="movie-card">
      {/* movie poster */}
      <img
        src="/assets/Poster.png"
        alt=""
        className="w-[250px] h-[370px]"
        data-testid="movie-poster"
      />
      {/* movie release data */}
      <h4
        className="text-[12px] leading-[15.62px]"
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

      <div className="flex gap-8">
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
