import { icons } from "react-icons/lib";
import Button from "../Button";
import { Icons } from "../../constants/icons";

function MovieDetailsMain() {
  return (
    <div className="w-[70%] ">
      <div className="mt-5">
        <img
          src="./assets/Poster.png"
          alt=""
          className=" h-[369px] rounded-lg"
        />
        <div className="flex mt-3  items-center">
          <div>
            <div className="flex items-center gap-5 m-4">
              <h2>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</h2>
              <span>Action</span>
              <span>Drama</span>
            </div>
            <p className="text-[18px] leadind-[30px] font-[400]">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>
            <div className="flex flex-col gap-3 my-3">
              <span>Director : Joseph Kosinski</span>
              <span>Writers : Jim Cash, Jack Epps Jr, Peter Craig</span>
              <span>Stars : Tom Cruise, Jennifer Connelly, Miles Teller</span>
            </div>
            <div className="flex">
              <Button className="text-white bg-[#BE123C] rounded p-1 text-[14px]">
                Top rated movie #65
              </Button>
              <div className="border-2 flex items-center justify-between rounded p-1 w-[340px]">
                Awards 9 nominations
                <img src="./assets/Expand Arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex items-center text-[14px] justify-end">
              {Icons.star()}8.5|350k
            </span>
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
              <img src="./assets/Group 52.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsMain;
