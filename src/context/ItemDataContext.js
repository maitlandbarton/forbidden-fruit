import { itemData } from "../data/itemData";
import { useState, createContext } from "react";

export const ItemDataContext = createContext();

export const ItemDataProvider = ({ children }) => {
    const [item, setItem] = useState(itemData);

    return (
        <ItemDataContext.Provider
            value={{item, setItem}}>
                { children }
        </ItemDataContext.Provider>
    )

}