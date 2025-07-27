import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link  } from "react-router-dom";

export default function why({ children, title, icon , href }) {
    let hrefDisplay = href.replace("/", "");
        return (
                <Link to={href} class="bg-lightBlack px-12 pb-12 flex flex-col rounded-lg justify-between mt-8 rotateShadowHover">
                    <div class="">
                        <div class="bg-bgOrange w-fit p-4 text-white rounded-2xl -translate-y-10">{icon}</div>
                        <h3 class="text-2xl tracking-tighter font-semibold text-white mb-3">{title}</h3>
                        <p>{children}</p>
                    </div>
                    <p class="uppercase mt-4 hover:translate-x-2 transition-transform duration-200">{hrefDisplay} <IconArrowNarrowRight class="inline"/></p>
                </Link>
        );
}