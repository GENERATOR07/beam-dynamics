import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
interface SearchProps {
  onClear: () => void;
  onSearch: (searchValue: string) => void;
}
export default function Search({ onSearch, onClear }: SearchProps) {
  const [search, setSearch] = useState<string | "">("");
  const [searched, setSearched] = useState<boolean>(false);
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSearch("");
      onSearch("");
      setSearched(false);
    }
    if (event.key === "Enter") handleSearch();
  };
  const handleSearch = () => {
    onSearch(search);
    setSearched(true);
  };
  const handleClear = () => {
    setSearch("");
    setSearched(false);
    onClear();
  };
  return (
    <div className=" w-[250px] flex gap-2  border-[#494949] border-[1px] rounded-[8px] relative text-sm">
      <span className=" absolute left-2 top-[14px]">
        <IoMdSearch color="white" size={16} />
      </span>

      <input
        placeholder="Find Player"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="max-w-sm bg-Appbackground text-white border-none border-0 h-full w-full  pl-8 "
        onKeyDown={handleKeyPress}
      ></input>
      {search === "" ? null : searched ? (
        <button
          onClick={handleClear}
          className=" absolute right-4 top-3 text-white"
        >
          {" "}
          x
        </button>
      ) : (
        <button
          onClick={handleSearch}
          className="text-xs absolute right-4 top-3"
        >
          search
        </button>
      )}
    </div>
  );
}
