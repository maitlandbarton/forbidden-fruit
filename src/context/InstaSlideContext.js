import { useState, createContext } from 'react';
import { instaSlideData } from '../data/instaSlideData';

export const InstaSlideContext = createContext()

export const InstaSlideProvider = ({ children }) => {
    const [instaSlide, setInstaSlide] = useState(instaSlideData)

    return (
        <InstaSlideContext.Provider
            value={{
                instaSlide,
                setInstaSlide,
            }}>
            { children }
        </InstaSlideContext.Provider>
    )
}