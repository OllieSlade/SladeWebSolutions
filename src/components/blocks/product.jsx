import { IconCheckbox } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export default function Pricing({ option }) {
    if (option === 1) {
        return (
            <div className="bg-lightBlack py-10 px-6 flex flex-col rounded-lg justify-between rotateShadow">
                <div className="">
                    <h3 className="text-3xl font-medium text-white uppercase mb-4">Upfront</h3>
                    <ul className="">
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Professional Custom Figma Design</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>A design you like or your money back</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Hand Developed in the UK</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Lifetime Support</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p className="font-bold">1 year of Minor Updates</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>SEO Optimised proofread copywriting</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>£50 one time fee per page after #5</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>£50/mo for unlimited updates</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>£200 one time fee to add a content management interface</p></li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl font-bold mt-4"><span className="text-accentBlue text-3xl slashed">£700</span><br/><span className="text-accentBlue text-4xl">£100</span> limited time only.</p>
                    <p className="text-sm font-light">(+ Optional £15/mo Hosting)</p>
                    <Link to="/contact" className="button mt-4">Get Started</Link>
                </div>
            </div>
        );
    }
    if (option === 2) {
        return (
            <div className="bg-lightBlack py-10 px-6 flex flex-col rounded-lg justify-between ">
                <div className="">
                    <h3 className="text-3xl font-medium text-white uppercase mb-4 ">Monthly</h3>
                    <ul className="">
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Professional Custom Figma Design</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>A design you like or your money back</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Hand Developed in the UK</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Lifetime Priority Support</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p className="font-bold">Unlimited Updates of Any Complexity</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>SEO Optimised proofread copywriting</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>Hosting Included</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>A Commitment to always keep your website secure, up-to-date, and running smoothly.</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>£50 one time fee per page after #6</p></li>
                        <li className="pb-2 grid grid-flow-col justify-self-start"><IconCheckbox className=' me-2 self-center'/><p>£200 one time fee to add a content management interface</p></li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl font-bold mt-4"><span className="text-accentBlue text-4xl">£80</span> per month</p>
                        <p className="text-sm font-light">(Minimum 12 month commitment)</p>
                    <Link to="/contact" className="button mt-4">Get Started</Link>
                </div>
            </div>
        );
    }
    if (option === 3) {
        return (
            <div className="bg-lightBlack py-10 px-6 flex flex-col rounded-lg justify-between">
                <div className="">
                    <h3 className="text-3xl font-medium text-white uppercase mb-4">Custom</h3>
                    <p>Have custom requirements or need a more complicated feature such as databasing? Contact Us and we’ll get back to you within 1 working day with details and a quote</p>
                    <p className="mt-4">We can also setup and manage email accounts and M365, design high quality logos, manage a Google Ads Campaign or setup automated SEO blogging</p>
                    <p className="mt-4">As an agency we pride ourselves in our real technical expertise in a huge range of scenarios. So if its digital, we can probably do it, just ask!</p>
                </div>
                <div className="">
                    <Link to="/contact" className="button mt-4">Get Started</Link>
                    
                </div>
            </div>
        );
    }
}