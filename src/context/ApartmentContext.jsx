import { createContext, useState, useEffect } from "react";
import { fetchLogements } from "../api";

export const ApartmentContext = createContext([]);

export const ApartmentProvider = ({ children }) => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchLogements();
          setLogements(data);
        };
    
        fetchData();
      }, []);
    
    return (
        <ApartmentContext.Provider value={logements}>
            { children }
        </ApartmentContext.Provider>
    );
};