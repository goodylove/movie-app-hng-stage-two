import { Icons } from "./../../constants/icons";
function Home() {
  return (
    <main>
      {/* hero section */}

      <section className="hero">
        {/* nav section */}
        <nav className="flex justify-between md:py-3 md:px-10 items-center p-3 relative">
          {/* movie logo */}
          <div className=" text-white flex items-center md:gap-4 gap-2 text-[10px]  md:text-[18px]">
            <span>{Icons.movieLogo()}</span>
            <span>MovieBox</span>
          </div>
          {/* search section */}
          <div className=" text-white md:flex items-center border-2 border-white rounded-md w-[525px] justify-between p-3 h-[36px] hidden">
            <input
              type="search"
              placeholder="what do you want to watch"
              className=" bg-transparent text-white w-full outline-none border-none "
            />
            <span>{Icons.searchIcon()}</span>
          </div>
          {/* mobile search section */}
          <div>
            <input
              type="search"
              placeholder="what do you want to watch"
              className=" bg-transparent text-white w-[60%] rounded-md p-1 outline-none   absolute top-20 border-2 left-20"
            />
          </div>

          {/* signin */}
          <div className="text-white flex items-center md:text-[18px]  text-[10px] md:gap-4 gap-2">
            <span className="md:hidden flex cursor-pointer">
              {Icons.searchIcon()}
            </span>
            <span>Sign In </span>
            <span>{Icons.hambugerIcon()}</span>
          </div>
        </nav>
      </section>
    </main>
  );
}

export default Home;
