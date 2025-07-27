export default function A({href, text}) {
    return (
        <a href={href} target="_blank" className="underline text-accentBlue p-1 font-light hover:bg-accentBlue hover:text-white hover:no-underline transition-colors duration-300">{text}</a>
    );
}