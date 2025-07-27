import A from '../components/interactives/a';

export default function Header() {
    return (
        <main>
            <div className="container mx-auto px-5 mt-8 md:mt-10">
                <div className="flex flex-col">
                    <h1 className="md:w-9/12 text-5xl md:text-6xl mb-5 font-medium text-white"><span className="text-accentOrange font-semibold">Contact us below</span> and we’ll get back to you within 1 day.</h1>
                    <p className="md:w-9/12 md:text-2xl text-xl md:mb-4">Or you can email directly via<A href="mailto:enquiries@sladewebsolutions.com" text="enquiries@sladewebsolutions.com" />and call/whatsapp (no text) via<A href="tel:+447356213500" text="07356 213500" /></p>
                </div>
            </div>

            <div className="container mx-auto px-5 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <form name="contact" method="POST" netlify="true">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="name" className="block mb-2 font-medium">Full Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 font-medium">Email Address</label>
                                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div>
                                <label for="company" className="block mb-2 font-medium">Company (Optional)</label>
                                <input type="text" id="company" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Limited Company LTD" />
                            </div>
                            <div>
                                <label for="phone" className="block mb-2 font-medium">Contact Number (Optional)</label>
                                <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07123456789" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label for="enquiry" className="block mb-2 font-medium">Enquiry</label>
                            <textarea id="enquiry" rows="6" name="enquiry" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide some context on what you'll need, or link your current site if you just want a refresh!" required></textarea>
                        </div>
                        <button type="submit" className="button text-xl">Submit</button>
                    </form>
                </div>

            </div>

        </main>
    )
}