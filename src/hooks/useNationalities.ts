import { useContext } from "react";
import { NationalityContext } from "@/context/nationality-context";

export default function useNationalities() {
  const context = useContext(NationalityContext);
  if (!context) {
    throw new Error(
      "useNationalities must be used within a NationalityProvider"
    );
  }

  return context;
}
