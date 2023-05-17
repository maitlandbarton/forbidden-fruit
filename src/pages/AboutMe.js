import image from "../images/example.jpg";
import AboutMeBio from "../components/AboutMeBio";
import SpinningFruit from "../components/reusables/SpinningFruit";
import navyGrid from "../images/grid-navy.png";

function AboutMe() {
  return (
    <div style={{ backgroundImage: `url(${navyGrid})` }}>
      <div className="h-screen my-auto pt-10">
        <div className="flex justify-around relative">
          <AboutMeBio />
          <SpinningFruit ml="20" />
          <img src={image} className="rounded-xl w-1/3 m-5"></img>
          <div className=" z-10">
            <SpinningFruit
              placement="right-0 bottom-0"
              ml="0"
              mt="10"
              mr="20"
              mb="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
