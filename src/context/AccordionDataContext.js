import { accordionData } from "../data/accordionData";
import { useState, createContext } from "react";

export const AccordionDataContext = createContext();

export const AccordionDataProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState(accordionData);

    return (
        <AccordionDataContext.Provider
            value={{menuItems, setMenuItems}}>
                { children }
        </AccordionDataContext.Provider>
    )
}