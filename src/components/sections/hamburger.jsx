import { NavLink } from "react-router-dom";

export default function Hamburger({ isOpen, onNavigate }) {

    return (
        <nav
            id="hamburgerMenu"
            aria-label="Mobile navigation"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={`font-libre text-white bg-pageBg fixed inset-0 w-screen overflow-y-auto z-40 grid place-content-center transition-opacity duration-300 ${isOpen ? "visible opacity-90" : "invisible opacity-0"}`}
        >
            <ul className="grid h-2/3 list-none text-5xl md:text-6xl gap-6 text-center place-items-center">
                <li><NavLink onClick={onNavigate} to="/" className="hover:translate-x-3 transition-transform duration-200">Home</NavLink></li>
                <li><NavLink onClick={onNavigate} to="/about" className="hover:translate-x-3 transition-transform duration-200">About</NavLink></li>
                <li><NavLink onClick={onNavigate} to="/pricing" className="hover:translate-x-3 transition-transform duration-200">Pricing</NavLink></li>
                <li><NavLink onClick={onNavigate} to="/contact" className="hover:translate-x-3 transition-transform duration-200">Contact</NavLink></li>
            </ul>
        </nav>
    )
}