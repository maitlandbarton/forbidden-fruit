import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-blue-300 py-4">
        <div className="flex justify-around">
          <h1>logo</h1>
          <div className="flex flex-col">
            <h1>FIND ME</h1>
            <Link>Pinterest</Link>
            <Link>Instagram</Link>
            <Link>Contact</Link>
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
