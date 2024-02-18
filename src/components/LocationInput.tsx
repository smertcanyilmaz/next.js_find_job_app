import React, {
  InputHTMLAttributes,
  forwardRef,
  useMemo,
  useState,
} from "react";
import { Input } from "./ui/input";
import citiesList from "@/lib/cities-list";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onLocationSelected: (location: string) => void;
};

export default forwardRef<HTMLInputElement, Props>(function LocationInput(
  { onLocationSelected, ...props },
  ref,
) {
  const [locationSearchInput, setLocationSearchInput] = useState("");

  const cities = useMemo(() => {
    if (!locationSearchInput.trim()) return [];

    const searchWords = locationSearchInput.split(" ");

    return citiesList
      .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
      .filter(
        (city) =>
          city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
          searchWords.every((word) =>
            city.toLowerCase().includes(word.toLowerCase()),
          ),
      );
  }, [locationSearchInput]);
  return <Input {...props} ref={ref} />;
});
