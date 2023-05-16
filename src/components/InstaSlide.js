import { useContext } from "react";
import { InstaSlideContext } from "../context/InstaSlideContext";

const InstaSlide = () => {
  const { instaSlide } = useContext(InstaSlideContext);

  return (
    <section className="flex flex-col items-center">
      <h1>Follow me on Instagram!</h1>
      <h2>@forbiddenfruitberlin</h2>
      <div className="flex justify-center">
        <div className="border grid grid-cols-3 gap-3">
          {instaSlide.map((insta) => (
            <img src={insta.img} className="w-60 rounded-xl"></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaSlide;
