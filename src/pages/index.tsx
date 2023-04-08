import Map from "../components/map/map";
import SearchBar from "@/components/searchbar";
import Why from "@/components/main/why";
import Sub from "@/components/main/sub";
const MainPage = () => {
  return (
    <div className="container">
      <div className="relative mt-5">
        <Map />
        <div className="absolute top-5 w-full">
          <div className="bg-white rounded-[90px] mx-[14px]">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
      <Why />
      <Sub />
    </div>
  );
};

export default MainPage;
