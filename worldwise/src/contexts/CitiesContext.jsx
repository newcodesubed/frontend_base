import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:9000";

//1) initiaing context
const CitiesContext = createContext();

//creating provider
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was errror with loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  //time to use citiesCOntext

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
//consumer create
function useCities() {
  const context = useContext(CitiesContext);
  //edge case ---->If you are using context in wrong place<---
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProdiver");
  return context;
}

export { CitiesProvider, useCities };
