import logo from "../images/FFB-logo.png";
import pinterest from "../images/pinterest-icon.png";
import instagram from "../images/insta-icon.png"

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-orange py-4 text-white">
        <div className="flex justify-around">
          <div className="my-auto bg-navy rounded-xl hidden lg:block">
            <img src={logo} className="w-28"></img>
          </div>
          <div className="lg:flex flex-col hidden lg:block">
            <h1 className="custom-font text-xl">FIND ME</h1>
            <a href="https://www.pinterest.de/forbiddenfruitberlin/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-lime">Pinterest</a>
            <a href="https://www.instagram.com/forbiddenfruitberlin/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-lime">Instagram</a>
            <a className="hover:underline hover:decoration-lime">Contact</a>
          </div>
        </div>
        <div className="flex space-x-3 w-screen justify-center lg:hidden py-4">
          <a>
            <img src={instagram}></img>
          </a>
          <a>
            <img src={pinterest}></img>
          </a>
        </div>

        <div className="w-screen text-center">
          <p>developed & designed by <a href="https://mattiebarton.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-navy hover:decoration-lime">Mattie Barton</a></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
