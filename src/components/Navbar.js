import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 mx-auto max-w-screen bg-gradient-to-b from-white to-transparent">
      <section className="flex justify-around p-4">

        <div className="hidden md:block space-x-3 custom-font text-xl">
            <Link to="/about" className="hover:underline decoration-navy text-lime">About</Link>
            <Link to="/shop" className="hover:underline decoration-navy text-lime">Shop</Link>
        </div>

        <Link to="/" className="text-2xl text-lime font-bold custom-font">FORBIDDEN FRUIT</Link>

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light mx-2"
          >
            <ShoppingBagIcon />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light lg:hidden"
          >
            <Bars3Icon />
          </svg>
        </div>

      </section>
    </header>
  );
}

export default Navbar;
