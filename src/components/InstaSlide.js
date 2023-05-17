import { useContext } from "react";
import { InstaSlideContext } from "../context/InstaSlideContext";

const InstaSlide = () => {
  const { instaSlide } = useContext(InstaSlideContext);

  return (
    <section className="flex flex-col items-center">
      <div className="top-3.5 text-center px-4 py-2 m-10 text-white bg-red rounded-3xl">
        <h1 className="text-3xl">Follow me on Instagram!</h1>
        <h2 className="text-xl tracking-widest mt-5 custom-font underline decoration-orange hover:decoration-lime">@forbiddenfruitberlin</h2>
      </div>
      <div className="flex justify-center">
        <div className="md:grid md:grid-cols-3 md:gap-3 flex overflow-x-auto snap-x space-x-6 md:space-x-0 mx-4">
          {instaSlide.map((insta) => (
            <img src={insta.img} className="w-60 rounded-xl"></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaSlide;
