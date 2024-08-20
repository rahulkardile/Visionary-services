import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (

    <div className="flex gap-4 items-center rounded-full p-2 text-white w-full bg-[#8173ac]">
        <CiSearch className="bg-transparent text-2xl mx-1" />
        <input className="bg-transparent outline-none w-full" placeholder="Search" />
    </div>
  )
}

export default SearchBar;

// bg-[#8173ac]
