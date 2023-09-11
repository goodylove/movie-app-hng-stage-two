import { Icons } from "./../../constants/icons";

function Search() {
  return (
    <div className=" text-white flex items-center border-2 border-white rounded-md w-[525px] justify-between p-3 h-[36px]  max-w-[100%]">
      <input
        type="search"
        placeholder="what do you want to watch"
        className=" bg-transparent text-white  outline-none border-none  text-[10px] w-full"
      />
      <span>{Icons.searchIcon()}</span>
    </div>
  );
}

export default Search;
