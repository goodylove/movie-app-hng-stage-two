import { Icons } from "./../../constants/icons";
import Search from "./../../Components/searchInput/index";
import { useState } from "react";

function Home() {
  const [toggleNavItem, setToggleNavItem] = useState(false);

  // this hanlder controls the toggling of Nav items for both destop and mobile devices
  const handleToogleNavItem = () => {
    setToggleNavItem((prev) => !prev);
  };

  // removes the mobile search component
  const handleRemoveMobileSearch = () => {
    setToggleNavItem(false);
  };

  return (
    <main>
      {/* hero section */}

      <section className="hero">
        {/* nav section */}

        <nav className="flex justify-between md:py-3 md:px-10 items-center p-3 relative">
          {/* movie logo */}

          {toggleNavItem ? (
            ""
          ) : (
            <div className=" text-white flex items-center md:gap-4 gap-2 text-[10px]  md:text-[18px]">
              <span>{Icons.movieLogo()}</span>
              <span className="md:text-[17px] text-[14px]">MovieBox</span>
            </div>
          )}

          {/*  desktop search section */}
          <span className="hidden">
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
        <div>
          {/* mobile search section */}
          {toggleNavItem ? (
            <div className=" md:hidden  flex  w-full items-center  justify-between py-3 px-1 gap-3  ">
              <Search />
              <span className="text-white" onClick={handleRemoveMobileSearch}>
                Cancel
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
