import { Icons } from "../../constants/icons";

function MovieDetailsSideBar() {
  return (
    <div className="w-[20%] border-2">
      <div className="flex  items-center gap-5 my-10 w-full ml-3">
        <span>{Icons.movieLogo()}</span>
        <span className="text-[20px] font-[700]">MovieBox</span>
      </div>
      <div className="flex  w-full ">
        <ul className="flex flex-col gap-10 w-full ">
          <li className="flex items-center gap-3  pl-5">
            <img src="./assets/home.png" alt="" width={20} height={15} />
            <span>Home</span>
          </li>
          <li className="flex items-center  gap-3 bg-[#F8E7EB] py-3  relative pl-5">
            <img
              src="./assets/Movie Projector.png"
              alt=""
              width={20}
              height={15}
            />
            <div className="bg-[#BE123C] absolute h-12  top-0 right-0 w-1"></div>
            <span>Movies</span>
          </li>
          <li className="flex  gap-3  items-center  pl-5 ">
            <img src="./assets/TV Show.png" alt="" width={20} height={15} />
            <span>Tv series</span>
          </li>
          <li className="flex gap-3   items-center  pl-5 ">
            <img src="./assets/Calendar.png" alt="" width={20} height={15} />
            <span>Upcoming</span>
          </li>
          <li className="bg-[#F8E7EB] w-[170px] h-[190px] rounded-md border-2 border-[#BE123C] flex justify-center flex-col items-center ml-5">
            <div>
              <p className="leading-[22.5px] text-[17px] w-[137px] h-[69px] text-[#333333]">
                Play movie quizes and earn free tickets
              </p>
            </div>
            <p className="text-[12px] leading-[18px] font-[500] w-[139px] h-[36px]">
              {" "}
              50k people are playing now
            </p>
            <button className="bg-[#f7c1ce] text-[#BE123C] rounded-full text-[10px] font-[700] p-1">
              start playing
            </button>
          </li>
          <li className="flex items-center pl-5">
            <img src="./assets/Logout.png" alt="" width={20} height={20} />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsSideBar;
