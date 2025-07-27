
export default function Header() {
    return (
        <footer className="px-5 mx-auto container pt-32 pb-8 font-montserrat">
        <div className="flex flex-row justify-between">
            <a className="text-4xl md:text-5xl text-accentOrange inline self-center pe-6" href="/">S<span className="text-accentBlue">W</span>S</a>
            <p className="text-right inline text-md self-center">&copy; 2025 Slade Web Solutions. All rights reserved.</p>
        </div>
            <a href="mailto:enquiries@sladewebsolutions.com" className="md:text-right mt-2 md:mt-0 text-center font-light italic block">enquiries@sladewebsolutions.com</a>
        </footer>
    )
}