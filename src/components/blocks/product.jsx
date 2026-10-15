import { IconCheckbox } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export default function Pricing({ option }) {
    if (option === 1) {
        return (
            <div className="bg-lightBlack py-10 px-6 flex flex-col rounded-lg justify-between rotateShadow">
                <div className="">
                    <h3 className="text-3xl font-medium text-white uppercase mb-4">Upfront</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>Professional Custom Figma Design</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>Approve the design before any payment made</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>Lifetime Support</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>Hosting Includes all required maintainence to keep your website looking and performing its best</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>Free domain when you host with us</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>SEO Optimised proofread copywriting</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>~£50 one time fee per page after #5</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0'/><p>~£100 - £500 one time fee to add a content management interface</p></li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl font-bold mt-4"><span className="text-accentBlue text-3xl">£500</span></p>
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
                    <h3 className="text-3xl font-medium text-white uppercase mb-4">Monthly</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>Professional Custom Figma Design</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>Approve the design before any payment made</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>Lifetime Support</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>Free domain</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>Includes 8hrs of development per month and priority response.</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>SEO Optimised proofread copywriting</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>~£50 one time fee per page after #5</p></li>
                        <li className="flex gap-2"><IconCheckbox className='shrink-0' /><p>~£100 - £500 one time fee to add a content management interface</p></li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl font-bold mt-4"><span className="text-accentBlue text-4xl">£150</span> per month</p>
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