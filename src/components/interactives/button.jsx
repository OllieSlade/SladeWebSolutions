import { Link } from 'react-router-dom';

export default function Button({href, text}) {
    return (
        <Link class="button self-center md:self-end text-lg md:text-xl" to={href}>{text}</Link>
    );
}