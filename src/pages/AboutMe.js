import image from "../images/example.jpg";
import AboutMeBio from "../components/AboutMeBio";
import tealGrid from "../images/grid-teal.png"

function AboutMe() {
  return (
    <div style={{ backgroundImage: `url(${tealGrid})` }}>
      <div className="h-screen">
        <div className="flex justify-around my-auto">
          <img src={image} className="rounded-xl w-1/3 m-5"></img>
          <AboutMeBio />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
