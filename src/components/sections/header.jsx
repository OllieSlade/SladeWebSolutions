import Logo from '../../assets/logo.png';
import { NavLink  } from "react-router-dom";

export default function Header() {
    const hamburgerToggle = () => {
        document.getElementById('hamburgerMenu').classList.toggle('opacity-90');
        document.getElementById('hamburgerMenu').classList.toggle('invisible');
    }
    return (
        <header class="bg-none py-7 relative dark:bg-transparent bg-offWhite">
            <div class="container mx-auto px-5">
            <div class="flex flex-wrap flex-row flex-shrink justify-between w-full place-items-center">
                <a href="/"><img src={Logo} class="w-64" width="603" height="185" alt="Orange and blue 3D square logo"/></a>
                <label htmlFor="burger" class="burger z-50 md:!hidden">
                <input type="checkbox" class="burger" id="burger" onClick={hamburgerToggle} />
                <span></span>
                <span></span>
                <span></span>
                </label>

                <nav id="mainNav" class="z-10 self-center justify-self-center hidden w-fit md:inline">
                <ul class="flex flex-row gap-3 text-white list-none text-2xl font-medium tracking-tighter text-center uppercase">
                    <NavLink to="/"><li class="hover:text-accentBlue transition-colors duration-200">Home</li></NavLink >
                    <NavLink to="/about"><li class="hover:text-accentBlue transition-colors duration-200">About</li></NavLink >
                    <NavLink to="/pricing"><li class="hover:text-accentBlue transition-colors duration-200">Pricing</li></NavLink >
                    <NavLink to="/contact"><li class="hover:text-accentBlue transition-colors duration-200">Contact</li></NavLink >
                </ul>
                </nav>
            </div>
            </div>
        </header>
    )
}