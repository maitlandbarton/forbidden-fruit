import { Link } from "react-router-dom";
import logo from "../images/FFB-logo.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-orange py-4 text-white">
        <div className="flex justify-around">
          <div>
            <img src={logo} className="w-36 rounded-xl"></img>
          </div>
          <div className="flex flex-col">
            <h1 className="custom-font text-xl">FIND ME</h1>
            <Link className="hover:underline hover:decoration-lime">Pinterest</Link>
            <Link className="hover:underline hover:decoration-lime">Instagram</Link>
            <Link className="hover:underline hover:decoration-lime">Contact</Link>
          </div>
        </div>

        <div className="w-screen text-center">
          <p>developed & designed by Mattie Barton</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
