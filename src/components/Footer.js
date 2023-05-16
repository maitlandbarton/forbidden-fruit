import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-orange py-4">
        <div className="flex justify-around">
          <h1>logo</h1>
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
