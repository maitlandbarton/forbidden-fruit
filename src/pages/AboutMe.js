import image from "../images/example.jpg";
import AboutMeBio from "../components/AboutMeBio";
import SpinningFruit from "../components/reusables/SpinningFruit";
import navyGrid from "../images/grid-navy.png"

function AboutMe() {
  return (
    <div style={{ backgroundImage: `url(${navyGrid})` }}>
      <div className="h-screen my-auto pt-10">
        <div className="flex justify-around ">
          <AboutMeBio />
          <SpinningFruit/>
          <img src={image} className="rounded-xl w-1/3 m-5"></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
