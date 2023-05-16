import { useContext } from "react";
import { InstaSlideContext } from "../context/InstaSlideContext";

const InstaSlide = () => {
  const  {instaSlide}  = useContext(InstaSlideContext);

  return (
    <div className="snap-x flex overflow-x-auto space-x-6 px-5 my-5">
      {instaSlide.map((insta) => (
        <img src={insta.img} className="w-60 rounded-xl"></img>
      ))}
    </div>
  );
};

export default InstaSlide;
