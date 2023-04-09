import { SelectInput, SearchInput, DateInput } from "@/components/ui/inputs";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { PrimaryButton } from "@/components/ui/buttons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setActiveDistrict, setActiveGeoTIFF } from "@/store/map.slice";
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const district = useAppSelector((state) => state.map.activeDistrict);
  const maptype = useAppSelector((state) => state.map.activeGeoTIFF);
  const [mapType, setMapType] = useState(maptype);
  const [place, setPlace] = useState();
  const [startDate, setStartDate] = useState();
  const [choose, setChoose] = useState();
  const router = useRouter();
  useEffect(() => {
    if (district) setPlace(district);
  }, [district]);
  useEffect(() => {
    console.log(mapType);
  });
  return (
    <div className="h-[110px] p-[38px] flex rounded-[40px] items-center justify-between bg-white">
      <div className="flex gap-3 items-center">
        <SelectInput
          value={mapType}
          onChange={(e) => {
            setMapType(e.target.value);
            dispatch(setActiveGeoTIFF(e.target.value));
          }}
          placeholder="Выберите тип карты"
          height="64px"
          width="360px"
        />
        <SearchInput
          value={place}
          onChange={(e) => void setPlace(e.target.value)}
          placeholder="Введите местоположение"
          height="64px"
          width="360px"
        />
        <DateInput
          value={startDate}
          height="64px"
          width="294px"
          placeholder="Введите дату"
          onChange={(e) => void setStartDate(e.target.value)}
        />
      </div>

      <PrimaryButton
        height="64px"
        width="210px"
        rounded="12px"
        onClick={() => {
          dispatch(setActiveDistrict(place));
        }}
      >
        Искать
      </PrimaryButton>
    </div>
  );
};
export default SearchBar;
