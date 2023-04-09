import { NextPage } from "next";
import SearchBar from "@/components/searchbar";
import Map from "@/components/map/map";
const MapPage: NextPage = () => {
  return (
    <div className="container">
      <div className="mt-5 mb-4">
        <SearchBar></SearchBar>
      </div>
      <Map />
    </div>
  );
};

export default MapPage;
