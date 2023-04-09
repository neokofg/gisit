import { NextPage } from "next";
import SearchBar from "@/components/searchbar";
const SearchPage: NextPage = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <SearchBar></SearchBar>
      </div>
      <div></div>
    </div>
  );
};

export default SearchPage;
