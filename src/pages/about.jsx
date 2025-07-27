import Ollie from '../assets/headshot.jpg';
import Button from '../components/interactives/button';

export default function Header() {
    return (
        <main>
            <div class="container mx-auto px-5 mt-8 md:mt-10">
                <div class="md:max-w-3/4">
                    <h1 class="text-5xl md:text-6xl mb-4 font-medium text-white">About <span class="text-accentOrange font-semibold">Us</span></h1>
                    <p class="text-xl md:mb-4">We are a small startup web developer based in London/Colchester. The main developer and founder, Ollie, is a Computer Science graduate from The University of Essex with a passion for all things Web Development. After getting asked by a couple of people to make websites for them he decided to start up his own business helping small companies get the online presence they deserve.</p>
                </div>
            </div>


            <div class="mt-20 md:mt-26">
                <div class="flex flex-row gap-14 mx-auto px-5 container flex-wrap md:flex-nowrap">
                    <div class="md:text-xl self-center order-1 md:order-1 w-full md:w-9/12">
                        <h2 class="text-4xl pb-6 font-semibold">Why go <span class="text-accentOrange font-bold">Bespoke?</span></h2>
                        <p class="">Bespoke sites are <span class="text-accentBlue font-medium">faster to load</span>, especially compared to website builder sites, such as WordPress or Squarespace. With far less “fat” to be loaded with the rest of the website, the visibility of your website is improved, along with customer satisfaction.</p>
                        <p class="pt-4 pb-4">Your business is unique, and your website should be too. <span class="text-accentBlue font-medium">Make your business stand out from your competitors</span> who all have websites that look the same. We build your website from the ground up, just for you.</p>

                        <Button text="GET A FREE QUOTE TODAY" href="/contact" />
                    </div>
                        <div class="relative place-self-center order-2 md:order-2 md:w-2/3 rounded-xl whiteGlow">
                            <img loading="lazy" class="rounded-xl " src={Ollie} width="1620" height="1080" alt="Headshot of Ollie Slade, owner of Slade Web Solutions, smiling in a black quarter zip." />
                            <div class="absolute right-6 bottom-6 bg-offWhite py-3 px-6 text-black leading-none md:text-lg rounded-md">
                                <p class="font-bold">OLLIE SLADE</p>
                                <p class="">Owner, Developer</p>
                            </div>
                        </div>
                </div>
            </div>
    </main>
    )
}