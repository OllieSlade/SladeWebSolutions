import pagespeed from '../assets/pagespeed.png';
import jp from '../assets/jamespearson.png';
import lawsons from '../assets/lawsonsbespokedecorating.png';
import ProjectShow from '../components/blocks/projectShow.jsx';
import Testimonial from '../components/blocks/testimonial.jsx';
import WhyBlock from '../components/blocks/why.jsx';
import A from '../components/interactives/a';
import Button from '../components/interactives/button';
import Pricing from '../components/sections/pricing';
import { IconWorldCheck } from '@tabler/icons-react';
import { IconDeviceMobile } from '@tabler/icons-react';
import { IconHeartHandshake } from '@tabler/icons-react';
import { IconBrandSpeedtest } from '@tabler/icons-react';
import { IconSeo } from '@tabler/icons-react';
import { IconLoadBalancer } from '@tabler/icons-react';
import { IconCurrencyPound } from '@tabler/icons-react';



export default function Header() {
    return (
        <main>
        <div className="container mx-auto px-5">
            <div className="mt-8 md:mt-28 flex flex-col">
                <p className="text-left font-light text-md md:text-2xl uppercase pb-1">Affordable, Unique, 100% Hand-Coded</p>
                <h1 className="text-left text-5xl md:text-7xl md:w-9/12 font-semibold text-white">Websites from the ground up, specifically for <span className=" text-accentOrange font-bold">your small business.</span></h1>
				<p className="md:w-9/12 text-2xl md:text-4xl right-0 mt-16 md:mt-24 self-end mb-4 text-left">Locally made bespoke websites with <span className="text-accentBlue font-medium">superior page rankings</span>. Give your business that unique edge from £80/mo.</p>
				<Button href="/contact" text="Get Started Today" />
            </div>
        </div>
        <div className="container mx-auto px-5">
            <div className="mt-20 md:mt-32">
                <h2 className="text-5xl text-center pb-10 font-semibold">Why <span className="text-accentOrange font-bold">Us?</span></h2>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
					<WhyBlock title="Mobile First" icon={<IconDeviceMobile size="50"/>} href="/pricing">According to Statcounter, over 60% of internet traffic is from mobile devices. This is why we prioritise mobile design to ensure your site looks and performs great on all devices.</WhyBlock>
					<WhyBlock title="Extended Support" icon={<IconHeartHandshake size="50"/>} href="/pricing">With all packages you get access to a year of extended support, ensuring your website remains up-to-date and secure. Need to regularly update your site but can't afford an inhouse web developer? We also offer unlimited updates for a low monthly fee.</WhyBlock>
					<WhyBlock title="Fast Loading" icon={<IconBrandSpeedtest size="50"/>} href="/about">As every site is hand-coded we only include what is necessary ensuring fast loading times and a smooth user experience. This helps reduce bounce rates and improve SEO.</WhyBlock>
					<WhyBlock title="Copywriting and SEO" icon={<IconSeo size="50"/>} href="/pricing">All the text on our sites is carefully checked by a professional proofreader for accuracy of spelling, grammar and punctuation, as well as for maximum impact on your site's search engine optimisation (SEO).</WhyBlock>
					<WhyBlock title="Advanced Features" icon={<IconLoadBalancer size="50"/>} href="/contact">Need an advanced feature? No problem! Whether you need databasing, API integrations, or something else. We can do it. We can even help you with Custom Email addresses or setting up M365.</WhyBlock>
					<WhyBlock title="Made in the UK" icon={<IconCurrencyPound size="50"/>} href="/about">All our websites are made by Developers based in the UK. No cheap overseas labour.</WhyBlock>
				</div>
            </div>
        </div>

	<div className="dark:bg-lightBlack bg-gray-300 mt-16 md:mt-28 py-14">
		<div className="container mx-auto px-5">
			<h2 className="text-5xl pb-8 font-semibold text-center text-white">Our Most <span className="text-accentOrange font-bold">Recent Projects</span></h2>
			<div className="grid auto-rows-auto gap-10 grid-cols-1 md:grid-cols-2 mt-4">
				<ProjectShow imageSrc={jp} imageAlt="Off White paperlike journalism website featuring 4 large image buttons" projectName="James Pearson Journalism" projectLink="https://jameswpearson.com/"/>
				<ProjectShow imageSrc={lawsons} imageAlt="Prior website I made, featuring a Burgundy and Gold colour scheme and background carousel" projectName="Lawson's Bespoke Decorating" projectLink="https://lawsonsbespokedecorating.com"/>
				
			</div>
		</div>
	</div>

	<div className="container mx-auto px-5 mt-20 md:mt-32">
		<h2 className="text-5xl pb-8 font-semibold text-center">Packages for <span className="text-accentOrange font-bold">Every Budget</span></h2>
		<Pricing />
	</div>
	

	<div className="bg-bgOrange py-12 mt-20 md:mt-32">
		<div className="container mx-auto flex flex-col px-5 text-center text-white">
			<p className="text-2xl md:text-3xl self-center md:w-11/12 font-medium">According to Google, the chance a <span className="text-accentBlueHC font-semibold">user goes</span> to a competitor <span className="text-accentBlueHC font-semibold">increases by 32%</span> when your page load time reaches <span className="text-accentBlueHC font-semibold">3 seconds.</span></p>
			<p className="text-xl md:text-2xl self-center mt-3 md:mt-6">Which can easily happen when a customer on a slow network tries to load a bulky template based site.</p>
		</div>
	</div>


<div className="container mx-auto px-5">
		<div className="mt-20 md:mt-32">
			<h2 className="text-5xl text-center pb-8 font-semibold">Client <span className="text-accentOrange font-bold">Testimonials</span></h2>
			<div className="grid grid-flow-row md:grid-flow-col gap-4">
				<Testimonial reviewText="I can't thank Ollie enough for his amazing service from start to finish he took my ideas I gave him for my website and put his own vision into it and produced a stunning website for my business and I am so proud of it. The effort he put into it over the Xmas period to have it up and running for the new year was unexpected and unbelievable to produce such a high standard over a short space of time. I highly recommend Slade Web Solutions to anyone and everyone. Thanks again Ollie" reviewerName="Dean L." companyName="Lawsons Bespoke Decorating" year="2025" companyLink="https://lawsonsbespokedecorating.com"/>
				<Testimonial reviewText="What more can I say but amazing! Ollie took my minimal idea for a website and forged a site that not only elevated that idea, but fit all my needs, is easy and accessible for me to use and still fit my aesthetic perfectly! He communicated to me throughout the process, keeping me up to date on his work as well as asking for my input when it came to design features." reviewerName="James P." companyName="James Pearson Journalism" year="2025" companyLink="https://jameswpearson.com"/>
			</div>
		</div>
	</div>

	<div className="px-5 mt-20 md:mt-32">
		<div className="flex flex-row gap-14 container mx-auto flex-wrap md:flex-nowrap">
			<div className="md:text-xl self-center order-2 md:order-1 w-full md:w-9/12">
				<h2 className="text-5xl pb-6 font-semibold">Our Websites <span className="text-accentOrange font-bold">Perform</span></h2>
				<p className="">Website load time isn't something people often think about, but it plays a huge role on the web. A slow loading site can result in lower rankings on search engines and fewer site conversions</p>
				<p className="pt-3">Test your website with <A href="https://pagespeed.web.dev" text="Google PageSpeed Insights"/> and see how it scores right now.</p>
				<div className="font-light pt-6 pb-3">
					<div className="pb-4 grid grid-flow-col justify-self-start items-center"><IconWorldCheck size="40" className="me-3 text-accentBlue"/><p>We aim for between 95 and 100 Performance score on Google</p></div>
					<div className="pb-4 grid grid-flow-col justify-self-start items-center"><IconWorldCheck size="40" className="me-3 text-accentBlue"/><p>A faster websites improves SEO and Google Ads Performance</p></div>
				</div>
				<Button href="/contact" text="GET Started Today" />
			</div>	
			<div className="self-center order-1 md:order-1 ">
				<img loading="lazy" className="w-full rounded-xl" src={pagespeed} width="751" height="597" alt="Google Page Insights screenshot showing 100 performance score"/>
			</div>
		</div>
	</div>



	<div className="container mx-auto px-5 mt-20 md:mt-32">
		<h2 className="text-5xl pb-10 font-semibold text-center">What Services <span className="text-accentOrange font-bold">Do You Offer?</span></h2>
		<div className="grid text-xl gap-4 w-10/12 mx-auto text-center place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Website Design and Development</p>
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Website Hosting</p>
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Domain Registration and Management</p>
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Advanced Backend Features</p>
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Website Modification and Improvement</p>
			<p className="border-accentBlue border-4 rounded-xl py-6 px-12 grid place-content-center">Custom Domain Email Addresses</p>
		</div>
	</div>

    </main>
    )
}