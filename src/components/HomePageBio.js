import { Link } from "react-router-dom";
import MovingFruit from "./reusables/MovingFruit";
import kiwi from "../images/kiwi.png";
import avocado from "../images/avocado.png";
import marketPic from "../images/market-pic.jpg";

function HomePageBio() {
  return (
    <div className="w-screen text-center overflow-hidden bg-teal border flex">
      <MovingFruit direction="moveDown" image={kiwi} />
      <div className="pt-10 text-white flex flex-col justify-center">
        <h2 className="text-2xl mx-10">
          <span className="text-3xl md:text-4xl custom-font text-navy">
            Hi! I'm Mattie,
          </span>{" "}
          an embroidery and textile artist based in Berlin, Germany.
        </h2>
        <br />
        <div className="flex flex-col mx-auto items-center">
          <p className="text-md md:text-lg w-3/5">
            I began embroidering in 2018 and immediately fell in love with the
            meditative and detail-oriented nature of the craft.
          </p>
          <div className="mx-10 md:mx-0">
            <img
              src={marketPic}
              className="my-8 rounded-2xl w-96 ring-4 ring-lime"
            ></img>
          </div>
          <p className="text-md md:text-lg w-3/5">
            My work combines traditional embroidery techniques & materials with
            not-so-traditional subject matter 🍊
          </p>
          <div className="my-10">
            <Link
              to="/shop"
              className="rounded-xl hover:bg-red py-2 px-4 text-white bg-orange custom-font text-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <MovingFruit direction="moveUp" image={avocado} />
    </div>
  );
}

export default HomePageBio;
