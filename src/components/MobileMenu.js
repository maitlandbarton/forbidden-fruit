import { Link } from "react-router-dom";

function MobileMenu() {
    return (
        <section id="mobile-menu" className="block sm:flex lg:hidden pb-5 justify-center items-center text-lg">
            <nav className="flex flex-col items-center">
                <Link to="/about" className="text-navy hover:underline hover:decoration-lime custom-font text-2xl">
                    About
                </Link>
                <Link to="/shop" className="text-navy hover:underline hover:decoration-lime custom-font text-2xl">
                    Shop
                </Link>
            </nav>
        </section>
    )
}

export default MobileMenu;