import { useContext } from "react";
import { InstaSlideContext } from "../context/InstaSlideContext";
import ReactCurvedText from 'react-curved-text';

const InstaSlide = () => {
  const { instaSlide } = useContext(InstaSlideContext);

  return (
    <section className="flex flex-col items-center">
      <div className="my-10 text-center">
      <ReactCurvedText
            width={375}
            height={150}
            cx={200}
            cy={200}
            rx={150}
            ry={150}
            startOffset={68}
            reversed={true}
            text="Follow me on Instagram!"
            textProps={{ style: { fontSize: 30} }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
      <h2 className="text-lg">@forbiddenfruitberlin</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3">
          {instaSlide.map((insta) => (
            <img src={insta.img} className="w-60 rounded-xl"></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaSlide;
