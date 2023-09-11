import { useState } from "react";

import { Icons } from "./../../constants/icons";
import Search from "./../../Components/searchInput/index";
import MovieCard from "../../Components/movieCard";
import Footer from "./../../Components/Footer/index";
import { GrFormClose } from "react-icons/gr";

function Home() {
  const [toggleNavItem, setToggleNavItem] = useState(false);
  const [toogleFavoriteIcon, setToggleFavoriteIcon] = useState(false);

  // this hanlder controls the toggling of Nav items for both destop and mobile devices
  const handleToogleNavItem = () => {
    setToggleNavItem((prev) => !prev);
  };

  // remove the mobile search component
  const handleRemoveMobileSearch = () => {
    setToggleNavItem(false);
  };

  const handleSaveFavorites = () => {
    setToggleFavoriteIcon((prev) => !prev);
  };

  return (
    <main className="w-full bg-white relative">
      {/* hero section starts here */}
      {/* popup  */}

      {toogleFavoriteIcon && (
        <div className="bg-white fixed rounded-sm    gap-3 z-50  p-2 notification top-20  right-0 ">
          <div className="flex  justify-end ">
            <GrFormClose
              className="text-[12px] font-[800] cursor-pointer"
              onClick={() => setToggleFavoriteIcon(false)}
            />
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/checked.png" width={30} height={30} alt="" />
            <span> favourite movie saved</span>
          </div>
        </div>
      )}

      <section className="hero">
        {/* nav section starts here */}

        <nav className="flex justify-between md:py-3 md:px-10 items-center p-3 relative">
          {toggleNavItem ? (
            ""
          ) : (
            <div className=" text-white flex items-center md:gap-4 gap-2 text-[10px]  md:text-[18px]">
              <span>{Icons.movieLogo()}</span>
              <span className="md:text-[17px] text-[14px]">MovieBox</span>
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
              <span className="md:flex hidden">Sign In </span>
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
                className="text-white cursor-pointer"
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
            <h3 className="text-[40px] leading-[56px] font-[700]">
              John Wick 3 : Parabellum
            </h3>
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
            <p className="text-white max-w-[302px] text-[14px] ">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="flex bg-[#BE123C]  w-[109px] text-[9px] gap-1 justify-center items-center rounded-sm    px-2 py-2">
              {Icons.videoIcon()}
              WATCH TRAILER
            </button>
          </div>
          <img src="/assets/Pagination Box.png" alt="" className="pr-5" />
        </div>
      </section>
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

        <div className="grid  lg:grid-cols-4 w-[90%] md:grid-cols-3 sm:grid-cols-2 grid-cols-1    justify-items-center col gap-x-8 gap-y-10">
          <MovieCard
            favourite={toogleFavoriteIcon}
            handleClick={handleSaveFavorites}
          />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
      {/* footer section */}
      <Footer />
    </main>
  );
}

export default Home;
