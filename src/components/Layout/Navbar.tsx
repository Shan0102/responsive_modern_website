import { useState } from "react";
import Logo from "../branding/Logo";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 sm:h-16 md:h-20">
                <Logo />

                <div className="hidden md:flex items-center space-x-6">
                    <NavLinks />
                </div>

                <BurgerButton IsOpen={mobileMenuIsOpen} setrIsOpen={setMobileMenuIsOpen} />
            </div>

            <BurgerMenu IsOpen={mobileMenuIsOpen} setrIsOpen={setMobileMenuIsOpen} />
        </nav>
    );
};

export default Navbar;
