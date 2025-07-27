import { Link  } from "react-router-dom";
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function Banner() {
    return (
        <Link class="rotateShadow moveHover" to="/pricing">
            <section class="bg-bgOrange w-full">
                <div class=" mx-auto text-2xl text-white font-medium text-center py-2 flex justify-around items-center">
                    <p><span class="font-bold text-accentBlueHC">GET A FULL CUSTOM WEBSITE FOR JUST £100</span>, NO HIDDEN FEES OR CONTRACTS. <span class="font-bold text-accentBlueHC">LIMITED NUMBER AVAILABLE</span></p>
                    <IconArrowNarrowRight class="moveHover-sub hidden md:block" size="50"/>
                </div>
            </section>
        </Link>
    );
}