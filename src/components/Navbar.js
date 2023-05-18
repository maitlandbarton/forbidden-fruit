import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <header className="sticky top-0 z-30 mx-auto max-w-screen bg-gradient-to-b from-teal to-transparent">
      <section className="flex justify-around p-4">
        <div className="hidden md:block space-x-3 custom-font text-xl">
          <Link
            to="/about"
            className="hover:underline decoration-navy text-lime"
          >
            About
          </Link>
          <Link
            to="/shop"
            className="hover:underline decoration-navy text-lime"
          >
            Shop
          </Link>
        </div>

        <Link to="/" className="text-2xl text-lime font-bold custom-font" onClick={closeMenu}>
          FORBIDDEN FRUIT
        </Link>

        <div className="flex">
          <Link to="/oops">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light mx-2 text-lime hover:text-navy"
          >
            <ShoppingBagIcon />
          </svg>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light text-lime hover:text-navy"
              >
                {showMenu ? (
                  <XMarkIcon className="text-3xl" />
                ) : (
                  <Bars3Icon className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </section>
      { showMenu && (
        <MobileMenu closeMenu={closeMenu}/>
      )}
    </header>
  );
}

export default Navbar;
