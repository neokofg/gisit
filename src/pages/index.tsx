import Map from "../components/map/map";
import SearchBar from "@/components/searchbar";
import Why from "@/components/main/why";
import Sub from "@/components/main/sub";
import Contacts from "@/components/main/contacts";
const MainPage = () => {
  return (
    <div className="container">
      <div className="relative mt-5">
        <Map />
        <div className="absolute top-0 w-full">
          <div className="bg-white rounded-b-[24px]">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
      <Why />
      <Sub />
      <Contacts />
    </div>
  );
};

export default MainPage;
