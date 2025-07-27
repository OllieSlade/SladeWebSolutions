import Ollie from '../assets/headshot.jpg';
import Button from '../components/interactives/button';

export default function Header() {
    return (
        <main>
            <div className="container mx-auto px-5 mt-8 md:mt-10">
                <div className="md:max-w-3/4">
                    <h1 className="text-5xl md:text-6xl mb-4 font-medium text-white">About <span className="text-accentOrange font-semibold">Us</span></h1>
                    <p className="text-xl md:mb-4">We are a small startup Web Agency based in London/Colchester. The lead developer and founder, Ollie, is a Computer Science graduate from the University of Essex with a passion for all things Web Development. After a few colleagues asked for a custom website, which they were very pleased with, he decided to start up his own business helping small companies get the online presence they deserved, without breaking the bank.</p>
                </div>
            </div>


            <div className="mt-20 md:mt-26">
                <div className="flex flex-row gap-14 mx-auto px-5 container flex-wrap md:flex-nowrap">
                    <div className="md:text-xl self-center order-1 md:order-1 w-full md:w-9/12">
                        <h2 className="text-4xl pb-6 font-semibold">Why go <span className="text-accentOrange font-bold">Bespoke?</span></h2>
                        <p className="">Bespoke sites are <span className="text-accentBlue font-medium">faster to load</span>, especially compared to website builder sites, such as WordPress or Squarespace. With far less “fat” to be loaded with the rest of the website, the visibility of your website is improved, along with customer satisfaction.</p>
                        <p className="pt-4 pb-4">Your business is unique, and your website should be too. <span className="text-accentBlue font-medium">Make your business stand out from your competitors</span> who all have websites that look the same. We build your website from the ground up, just for you.</p>

                        <Button text="GET started TODAY" href="/contact" />
                    </div>
                        <div className="relative place-self-center order-2 md:order-2 md:w-2/3 rounded-xl whiteGlow">
                            <img loading="lazy" className="rounded-xl " src={Ollie} width="1620" height="1080" alt="Headshot of Ollie Slade, owner of Slade Web Solutions, smiling in a black quarter zip." />
                            <div className="absolute right-6 bottom-6 bg-offWhite py-3 px-6 text-black leading-none md:text-lg rounded-md">
                                <p className="font-bold">OLLIE SLADE</p>
                                <p className="">Owner, Developer</p>
                            </div>
                        </div>
                </div>
            </div>
    </main>
    )
}