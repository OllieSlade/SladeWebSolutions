import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Hamburger from './hamburger';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className="bg-none py-7 relative bg-transparent">
            <div className="container mx-auto px-5">
            <div className="flex flex-wrap flex-row flex-shrink justify-between w-full place-items-center">
                <Link to="/" aria-label="Slade Web Solutions home">
                    <img src={Logo} className="w-64" width="603" height="185" alt="Orange and blue 3D square logo"/>
                </Link>
                <button
                    type="button"
                    className="burger z-50 md:!hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="hamburgerMenu"
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>

                <nav id="mainNav" aria-label="Primary navigation" className="z-10 self-center justify-self-center hidden w-fit md:inline">
                <ul className="flex flex-row gap-3 text-white list-none text-2xl font-medium tracking-tighter text-center uppercase">
                    <li><NavLink to="/" className="hover:text-accentBlue transition-colors duration-200">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-accentBlue transition-colors duration-200">About</NavLink></li>
                    <li><NavLink to="/pricing" className="hover:text-accentBlue transition-colors duration-200">Pricing</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-accentBlue transition-colors duration-200">Contact</NavLink></li>
                </ul>
                </nav>
            </div>
            </div>
        </header>
        <Hamburger isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
        </>
    )
}