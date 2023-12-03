"use client";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface NationalityContextValue {
  nationalities: string[];
}

export const NationalityContext = createContext<NationalityContextValue | null>(
  null
);

export const NationalityContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [nationalities, setNationalities] = useState<string[]>([]);
  useEffect(() => {
    const fetchNationalities = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData = response.data;

        const nationalitiesArray = countriesData
          .map((country: any) => {
            const nationality = country.demonyms?.eng?.m || "N/A";

            return nationality;
          })
          .sort();

        const nationalityList: string[] = Array.from(
          new Set<string>(nationalitiesArray)
        );

        setNationalities(nationalityList);
      } catch (error: any) {
        setNationalities([]);
      }
    };
    fetchNationalities();
  }, []);
  return (
    <NationalityContext.Provider value={{ nationalities }}>
      {children}
    </NationalityContext.Provider>
  );
};
