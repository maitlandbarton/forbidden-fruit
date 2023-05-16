import { Link } from "react-router-dom";
import myImage from "../images/example.jpg";

function HomePageBio() {
  return (
    <div className="w-screen mx-auto text-center py-6 my-4 bg-teal">
      <div className="py-10 text-white">
        <h1 className="text-2xl">
          Hi! I'm Mattie, an embroidery and textile artist based in Berlin,
          Germany.
        </h1>
        <br />
        <div className="w-1/3 mx-auto">
          <p className="text-lg">
            I began embroidering in 2018 and immediately fell in love with the
            meditative and detail-oriented nature of the craft.
          </p>
          <div className="bg-navy rounded-2xl">
          <img src={myImage} className="my-8 rounded-2xl p-2"></img>
          </div>
          <p className="text-lg">
            My work combines traditional embroidery techniques & materials with
            not so traditional subject matter 🍊
          </p>
        </div>
      </div>
      <Link
        to="/shop"
        className="rounded-xl hover:bg-red py-2 px-4 text-white bg-navy custom-font text-xl"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default HomePageBio;
