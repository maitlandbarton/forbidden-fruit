import image from "../images/example.jpg";
import AboutMeBio from "../components/AboutMeBio";
import SpinningFruit from "../components/reusables/SpinningFruit";
import navyGrid from "../images/grid-navy.png";
import grapefruit from "../images/grapefruit.png";
import lime from "../images/lime.png";

function AboutMe() {
  return (
    <div style={{ backgroundImage: `url(${navyGrid})` }}>
      <h1 className="text-center text-6xl text-orange p-10">ABOUT</h1>
      <div className="lg:h-full my-auto pb-10 px-10">
        <div className="flex lg:flex-row flex-col justify-around relative lg:ml-10 lg:m-5 max-w-9xl">
          <AboutMeBio />
          <div className="z-10 hidden lg:block">
            <SpinningFruit ml="20" image={grapefruit} />
          </div>
          <div className="relative my-auto mx-auto lg:mx-0 lg:w-2/5">
            <img
              src={image}
              className="rounded-3xl ring-4 ring-orange  my-8"
            ></img>
            <div className="z-10 hidden lg:block">
              <SpinningFruit
                placement="right-0 bottom-0"
                mt="28"
                image={lime}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
