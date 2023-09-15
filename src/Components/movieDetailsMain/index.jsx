import Button from "../Button";
import { Icons } from "../../constants/icons";
import ListImg from "../../assets/List.png";
import showTimes from "../../assets/Two Tickets.png";
import GroupImg from "../../assets/Group 52.png";
import Arrow from "../../assets/Expand Arrow.png";

// movie details main section

function MovieDetailsMain({ data }) {
  const utcDate = (dates) => {
    const inputDate = new Date(dates);

    const utcDate = new Date(
      inputDate.getUTCFullYear(),
      inputDate.getUTCMonth(),
      inputDate.getUTCDate(),
      0,
      0,
      0
    );

    const formattedDate = utcDate.toISOString();
    return formattedDate;
  };

  return (
    <div className="md:w-[70%]  px-3 overflow-y-scroll main overflow-x-hidden w-[100%]">
      <div className="mt-5 max-w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
          className="w-full h-[300px] object-cover rounded-lg"
        />

        <div className=" flex-col md:flex-row flex md:items-center md:gap-5  md:justify-between w-full  font-[500]">
          <div className=" flex-col flex gap-3 md:mt-4 text-[10px] md:text-[17px] md:flex-row mt-4">
            <span data-testid="movie-title" className="flex gap-4">
              {data.title}
              <span data-testid="movie-release-date">
                {utcDate(data.release_date)}
              </span>
              <span data-testid="movie-runtime">{data.runtime} minutes</span>
            </span>
          </div>

          <div className="text-[10px] md:text-[17px]">
            <span className="flex items-center  md:justify-end  text-[10px]">
              {Icons.star()}
              {Number.parseFloat(data.vote_average)} | 350k
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row    md:items-center w-full md:justify-between gap-5 flex-col ">
          <div className="w-full flex flex-col items-center">
            <p
              className="md:text-[15px] font-[300] leading-[30px] text-[13px] my-3"
              data-testid="movie-overview"
            >
              {data.overview}
            </p>

            <div className="flex flex-col md:flex-row gap-3">
              <Button className="text-white bg-[#BE123C] rounded p-2 text-[13px] w-[220px]">
                Top rated movie #65
              </Button>
              <div className="border-2 flex items-center justify-between rounded p-1 w-[220px]">
                Awards 9 nominations
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3   mt-5 md:justify-center  md:items-center items-center">
            <Button className="text-white bg-[#BE123C]  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={showTimes} alt="show icon" width={20} height={20} />
              See Showtimes
            </Button>
            <Button className="text-black bg-red-200  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={ListImg} alt="listicon" />
              More watch options
            </Button>
            <div>
              <img src={GroupImg} alt="gruopimg" width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsMain;
