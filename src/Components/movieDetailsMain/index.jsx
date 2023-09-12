import Button from "../Button";
import { Icons } from "../../constants/icons";

// movie details main section

function MovieDetailsMain() {
  return (
    <div className="w-[70%]  px-3 overflow-y-scroll main">
      <div className="mt-5 max-w-full">
        <img
          src="./assets/Poster.png"
          alt=""
          className=" max-h-[369px] rounded-lg"
        />
        <div className=" flex-col md:flex-row flex md:items-center md:gap-5  md:justify-between w-full ">
          <div className=" flex-col flex gap-1 md:mt-4 text-[10px] md:text-[17px] md:flex-row mt-4">
            <span>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</span>
            <span>Action &nbsp; Drama</span>
          </div>
          <div className="text-[10px] md:text-[17px]">
            <span className="flex items-center  md:justify-end ">
              {Icons.star()}8.5|350k
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row  mt-3  md:items-center w-full md:justify-between gap-5 flex-col ">
          <div className="w-full">
            <p className="md:text-[18px] leadind-[30px] font-[400] text-[13px]">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>
            <div className="flex flex-col gap-3 my-3 md:text-[15px] text-[10px]">
              <span>Director : Joseph Kosinski</span>
              <span>Writers : Jim Cash, Jack Epps Jr, Peter Craig</span>
              <span>Stars : Tom Cruise, Jennifer Connelly, Miles Teller</span>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <Button className="text-white bg-[#BE123C] rounded p-2 text-[13px] w-[220px]">
                Top rated movie #65
              </Button>
              <div className="border-2 flex items-center justify-between rounded p-1 w-[220px]">
                Awards 9 nominations
                <img src="./assets/Expand Arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3   mt-5 md:justify-center  :md:items-center">
            <Button className="text-white bg-[#BE123C]  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img
                src="./assets/Two Tickets.png"
                alt=""
                width={20}
                height={20}
              />
              See Showtimes
            </Button>
            <Button className="text-black bg-red-200  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src="./assets/List.png" alt="" />
              More watch options
            </Button>
            <div>
              <img src="./assets/Group 52.png" alt="" width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsMain;
