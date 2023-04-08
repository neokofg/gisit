import { SelectInput, SearchInput, DateInput } from "@/components/ui/inputs";
import { PrimaryButton } from "@/components/ui/buttons";
import { useState } from "react";
const SearchBar = () => {
  const [mapType, setMapType] = useState();
  const [place, setPlace] = useState();
  const [startDate, setStartDate] = useState();
  const [choose, setChoose] = useState();
  return (
    <div className="h-[110px] p-[38px] flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <SelectInput
          value={mapType}
          onChange={(e) => void setMapType(e.target.value)}
          placeholder="Выбери тип карты"
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

      <PrimaryButton height="64px" width="210px" rounded="12px">
        Искать
      </PrimaryButton>
    </div>
  );
};
export default SearchBar;
