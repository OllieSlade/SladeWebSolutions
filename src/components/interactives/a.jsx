export default function A({href, text}) {
    const opensNewTab = /^https?:\/\//i.test(href);

    return (
        <a
            href={href}
            target={opensNewTab ? "_blank" : undefined}
            rel={opensNewTab ? "noopener noreferrer" : undefined}
            className="underline text-accentBlue p-1 font-light hover:bg-accentBlue hover:text-white hover:no-underline transition-colors duration-300"
        >
            {text}
        </a>
    );
}