import { NavLink } from "react-router-dom";

export default function Hamburger () {
    const hamburgerHide = () => {
        document.getElementById('hamburgerMenu').classList.remove('opacity-90');
        document.getElementById('hamburgerMenu').classList.add('invisible');
        document.getElementById('burger').checked = false; // Uncheck the burger input
    }

    return (
        <nav id="hamburgerMenu" class="font-libre text-white bg-pageBg fixed h-full w-full overflow-y-auto z-30 grid invisible place-content-center transition-opacity opacity-0 duration-300">
            <ul class="grid h-2/3 list-none text-5xl md:text-6xl gap-6 text-center place-items-center">
            <NavLink onClick={hamburgerHide} to="/">
                <li class="hover:translate-x-3 transition-transform duration-200">Home</li>
            </NavLink>
            <NavLink onClick={hamburgerHide} to="/about">
                <li class="hover:translate-x-3 transition-transform duration-200">About</li>
            </NavLink>
            <NavLink onClick={hamburgerHide}to="/pricing">
                <li class="hover:translate-x-3 transition-transform duration-200">Pricing</li>
            </NavLink>
            <NavLink onClick={hamburgerHide} to="/contact">
                <li class="hover:translate-x-3 transition-transform duration-200">Contact</li>
            </NavLink>
            </ul>
        </nav>
    ) 
}