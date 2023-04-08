import { SelectInput, SearchInput, DateInput } from "@/components/ui/inputs";
import { PrimaryButton } from "@/components/ui/buttons";
import { useState } from "react";
const SearchBar = () => {
  const [mapType, setMapType] = useState();
  const [place, setPlace] = useState();
  const [startDate, setStartDate] = useState();
  const [choose, setChoose] = useState();
  return (
    <div className="h-[110px] p-[38px] flex gap-3">
      <SelectInput
        value={mapType}
        onChange={(e) => void setMapType(e.target.value)}
        placeholder="Выбери тип карты"
      />
      <SearchInput
        value={place}
        onChange={(e) => void setPlace(e.target.value)}
      />
      <DateInput
        value={startDate}
        onChange={(e) => void setStartDate(e.target.value)}
      />
      <SelectInput
        value={choose}
        onChange={(e) => void setChoose(e.target.value)}
      />
      <PrimaryButton>Найти</PrimaryButton>
    </div>
  );
};
export default SearchBar;
