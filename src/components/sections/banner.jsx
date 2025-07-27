import { Link  } from "react-router-dom";
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function Banner() {
    return (
        <Link className="rotateShadow moveHover" to="/pricing">
            <section className="bg-bgOrange w-full">
                <div className=" mx-auto text-2xl text-white font-medium text-center py-2 flex justify-around items-center">
                    <p><span className="font-bold text-accentBlueHC">GET A FULL CUSTOM WEBSITE FOR JUST £100</span>, NO HIDDEN FEES OR CONTRACTS. <span className="font-bold text-accentBlueHC">LIMITED NUMBER AVAILABLE</span></p>
                    <IconArrowNarrowRight className="moveHover-sub hidden md:block" size="50"/>
                </div>
            </section>
        </Link>
    );
}