import Logo from '../../assets/logo.png';
import { NavLink  } from "react-router-dom";

export default function Header() {
    const hamburgerToggle = () => {
        document.getElementById('hamburgerMenu').classList.toggle('opacity-90');
        document.getElementById('hamburgerMenu').classList.toggle('invisible');
    }
    return (
        <header className="bg-none py-7 relative dark:bg-transparent bg-offWhite">
            <div className="container mx-auto px-5">
            <div className="flex flex-wrap flex-row flex-shrink justify-between w-full place-items-center">
                <a href="/"><img src={Logo} className="w-64" width="603" height="185" alt="Orange and blue 3D square logo"/></a>
                <label htmlFor="burger" className="burger z-50 md:!hidden">
                <input type="checkbox" className="burger" id="burger" onClick={hamburgerToggle} />
                <span></span>
                <span></span>
                <span></span>
                </label>

                <nav id="mainNav" className="z-10 self-center justify-self-center hidden w-fit md:inline">
                <ul className="flex flex-row gap-3 text-white list-none text-2xl font-medium tracking-tighter text-center uppercase">
                    <NavLink to="/"><li className="hover:text-accentBlue transition-colors duration-200">Home</li></NavLink >
                    <NavLink to="/about"><li className="hover:text-accentBlue transition-colors duration-200">About</li></NavLink >
                    <NavLink to="/pricing"><li className="hover:text-accentBlue transition-colors duration-200">Pricing</li></NavLink >
                    <NavLink to="/contact"><li className="hover:text-accentBlue transition-colors duration-200">Contact</li></NavLink >
                </ul>
                </nav>
            </div>
            </div>
        </header>
    )
}