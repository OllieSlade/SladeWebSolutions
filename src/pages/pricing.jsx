import Pricing from '../components/sections/pricing';

export default function Header() {
    return (
        <main>
            <div class="container mx-auto px-5 mt-8 md:mt-10">
                <div class="">
                    <h1 class="md:w-9/12 text-5xl md:text-6xl mb-4 font-medium text-white ">Our <span class="text-accentOrange font-semibold ">Pricing</span></h1>
                    <p class="md:w-9/12 text-xl md:mb-4">We have packages available for every budget</p>
                </div>
            </div>

            <Pricing />

            <div class="container mx-auto px-5 mt-28">
                <div class="flex flex-col text-lg md:max-w-3/4">
                    <h1 class="md:w-9/12 text-5xl mb-5 font-medium "><span class="text-accentOrange font-semibold ">Which Package</span> do I need?</h1>
                    <p class="">If you would like a website with the intention of hosting it yourself, or not planning to change anything on it very frequently, the upfront package is probably the best option</p>
                    <p class="mt-5">If you would like us to handle everything, plan to update parts of the website fairly often, or are even a cash-strapped start-up simply not able to afford the upfront amount. Then the Monthly package is for you. You are required to stay subscribed for at least 12 months, although after that you can choose to leave and take your website with you.</p>
                </div>
            </div>
        </main>
    )
}