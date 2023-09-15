import { Icons } from "../../constants/icons";
import homeImg from "../../assets/home.png";
import moveProject from "../../assets/Movie Projector.png";
import TvShow from "../../assets/TV Show.png";
import Calander from "../../assets/Calendar.png";
import logOut from "../../assets/Logout.png";
import { Link } from "react-router-dom";

function MovieDetailsSideBar() {
  return (
    <div className="w-[20%] border-2 md:flex  my-2  flex-col rounded-r-[20px]  hidden  ">
      <div className="flex items-center md:gap-5 mb-5 w-full lg:ml-3 gap-1 py-5  pl-1  justify-start">
        <span className="">{Icons.movieLogo()}</span>
        <span className="xl:text-[20px] font-[700] md:text-[18px] text-[8px] ">
          MovieBox
        </span>
      </div>

      <div className="flex  w-full ">
        <ul className="flex flex-col md:gap-7 w-full  gap-20 ">
          <li className="flex items-center gap-7 pl-5 hover:bg-[#F8E7EB] py-4">
            <img src={homeImg} alt="home icon" width={20} height={15} />
            <Link to="/">
              <span className="hidden md:flex">Home</span>
            </Link>
          </li>

          <li className="flex items-center  gap-7 bg-[#F8E7EB]   relative pl-5 hover:bg-[#F8E7EB] py-4">
            <img src={moveProject} alt="video icon" width={20} height={15} />
            <div className="bg-[#BE123C] absolute h-12   top-0 right-0 w-1"></div>
            <span className="hidden md:flex">Movies</span>
          </li>

          <li className="flex  gap-7  items-center  pl-5 ">
            <img src={TvShow} alt="tv show icon" width={20} height={15} />
            <span className="hidden md:flex">Tv series</span>
          </li>

          <li className="flex  gap-7  items-center  pl-5  hover:bg-[#F8E7EB] py-4">
            <img src={Calander} alt="calander icon" width={20} height={15} />
            <span className="hidden md:flex">Upcoming</span>
          </li>

          <li className="bg-[#F8E7EB]  max-w-[170px]  hover:bg-[#F8E7EB] py-4 rounded-3xl border-[1px] border-[#BE123C] md:flex md:justify-center flex-col md:items-center ml-5 hidden">
            <div>
              <p className="leading-[21px] xl:text-[16px] xl:w-[137px] text-[#333333] text-[14px]  mt-2 ml-4 ">
                Play movie quizes and earn free tickets
              </p>
            </div>

            <p className="text-[12px] leading-[18px] font-[500] w-[139px] ">
              50k people are playing now
            </p>
            <button className="bg-[#f7c1ce] text-[#BE123C] rounded-full text-[10px] font-[700] p-1 w-[100px] my-2">
              start playing
            </button>
          </li>
          <li className="flex items-center pl-5  gap-7 mb-3 hover:bg-[#F8E7EB] py-4">
            <img src={logOut} alt="logout icon" width={20} height={20} />
            <span className="hidden md:flex">Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsSideBar;
