import { useState } from "react";

import { Icons } from "./../../constants/icons";
import Search from "./../../Components/searchInput/index";
import MovieCard from "../../Components/movieCard";
import Footer from "./../../Components/Footer/index";
import useFetchMovies from "../../Hooks/useFetchMovies";
import Loader from "../../Components/Loader";
import ImbImg from "../../assets/imb.png";
import PngItem from "../../assets/PngItem.png";
import errorImg from "../../assets/Oops404 Error with a broken robot-pana.png";
import rectangle from "../../assets/Rectangle 1.png";
import useCalculateRating from "./../../Hooks/useCalculateRating";

function Home() {
  const [toggleNavItem, setToggleNavItem] = useState(false);
  const [slider, setSlider] = useState(0);

  const { data, loading, error } = useFetchMovies();
  const { calcMovieRating } = useCalculateRating();

  // this hanlder controls the toggling of Nav items for both destop and mobile devices
  const handleToogleNavItem = () => {
    setToggleNavItem((prev) => !prev);
  };

  // remove the mobile search component
  const handleRemoveMobileSearch = () => {
    setToggleNavItem(false);
  };

  const handleActivateSlider = (index) => {
    setSlider(index);
  };

  return (
    <>
      {loading && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}

      {/* display data if data length is greater than 0 */}
      {data.length > 0 && (
        <main className="w-full bg-white relative">
          {/* hero section starts here */}

          {data?.slice(0, 5).map(
            (movie, index) =>
              slider === index && (
                <section
                  key={movie.id}
                  className=""
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    width: "100%",
                    height: "500px",
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                >
                  {/* nav section starts here */}

                  <nav className="flex justify-between md:py-3 md:px-10 items-center p-3 relative">
                    {toggleNavItem ? (
                      ""
                    ) : (
                      <div className=" text-white flex items-center md:gap-4 gap-2 text-[10px]  md:text-[18px]">
                        <span>{Icons.movieLogo()}</span>
                        <span className="md:text-[17px] text-[14px]">
                          MovieBox
                        </span>
                      </div>
                    )}

                    {/*  desktop search section */}
                    <span className="hidden md:flex">
                      <Search />
                    </span>

                    {/* signin */}
                    {toggleNavItem ? (
                      ""
                    ) : (
                      <div className="text-white flex items-center md:text-[18px]  text-[10px] md:gap-4 gap-2">
                        <span
                          className="md:hidden flex cursor-pointer"
                          onClick={handleToogleNavItem}
                        >
                          {Icons.searchIcon()}
                        </span>
                        <span className="md:flex hidden md:text-[16] text-[13px]">
                          SignIn{" "}
                        </span>
                        <span>{Icons.hambugerIcon()}</span>
                      </div>
                    )}
                  </nav>

                  {/* nav bar section ends here */}
                  <div>
                    {/* mobile search section */}
                    {toggleNavItem ? (
                      <div className=" md:hidden  flex  w-full items-center  justify-between py-1 px-1 gap-3  ">
                        <Search />
                        <span
                          className="text-white cursor-pointer text-[15px]"
                          onClick={handleRemoveMobileSearch}
                        >
                          Cancel
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* hero section movie title */}
                  <div className="flex items-center  justify-between">
                    <div className="text-white w-[404px] h-[285px] flex flex-col gap-4  md:ml-24   md:mt-7 m-5 p-2">
                      <h3 className=" md:text-[40px] text-[30px] leading-[56px] font-[700]">
                        {/* John Wick 3 : Parabellum */}
                        {movie.title}
                      </h3>

                      <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                          <img src={ImbImg} alt="imbImg" />
                          <span>850/100</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src={PngItem} alt="pngitem" />
                          <span>{calcMovieRating(movie.vote_average)}</span>
                        </div>
                      </div>

                      <p className="text-white max-w-[302px] text-[14px] ">
                        {movie.overview}
                      </p>
                      <button className="flex bg-[#BE123C]  w-[109px] text-[9px] gap-1 justify-center items-center rounded-sm    px-2 py-2">
                        {Icons.videoIcon()}
                        WATCH TRAILER
                      </button>
                    </div>

                    {/* <img src={Pagnation} alt="" className="pr-5" /> */}
                    <ul className="mr-4 cursor-pointer">
                      {Array.from({ length: 5 }, (_, i) => i + 1).map(
                        (_, index) => (
                          <li
                            className="text-white font-[800] relative  flex items-center "
                            key={index}
                            onClick={() => handleActivateSlider(index)}
                          >
                            <span
                              className=" absolute left-[-23px] top-3
                            "
                            >
                              {slider === index && (
                                <img src={rectangle} alt="rectangle" />
                              )}
                            </span>

                            <span> {index + 1}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </section>
              )
          )}

          {/* hero section ends here */}

          <section className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] flex justify-between my-6 items-center">
              <h2 className="md:text-[36px] leading-[46.83px] font-[700] text-[20px]">
                Featured Movie
              </h2>
              <p className="flex items-center gap-2 md:text-[18px] leading-[24px] font-[400] text-[#BE123C] text-[10px]">
                See More {Icons.seeMoreIcon()}
              </p>
            </div>

            {/* top 10 movies display */}

            <div className="grid  xl:grid-cols-4  lg:grid-cols-3 w-[90%] md:grid-cols-3 sm:grid-cols-2 grid-cols-1    justify-items-center col gap-x-8 gap-y-10">
              {data.slice(0, 10).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* footer section */}
          <Footer />
        </main>
      )}

      {/* display error message if error is true */}
      {error && (
        <div className="flex flex-col ga-2 justify-center items-center my-20">
          <img src={errorImg} alt="error img" width={300} height={300} />
          <h2 className="text-[20px] font-[700]">{error}</h2>
        </div>
      )}
    </>
  );
}

export default Home;
