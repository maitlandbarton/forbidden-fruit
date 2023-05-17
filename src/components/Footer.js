import { a } from "react-router-dom";
import logo from "../images/FFB-logo.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-orange py-4 text-white">
        <div className="flex justify-around">
          <div className="my-auto bg-navy rounded-xl">
            <img src={logo} className="w-28"></img>
          </div>
          <div className="flex flex-col">
            <h1 className="custom-font text-xl">FIND ME</h1>
            <a href="https://www.pinterest.de/forbiddenfruitberlin/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-lime">Pinterest</a>
            <a href="https://www.instagram.com/forbiddenfruitberlin/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-lime">Instagram</a>
            <a className="hover:underline hover:decoration-lime">Contact</a>
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
