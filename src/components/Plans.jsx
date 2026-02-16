import { PricingTable } from '@clerk/clerk-react';

const Plans = () => {
    return (
        <div className='max-w-2xl mx-auto z-20 my-30 max-md:px-4'>
            <div className='text-center'>
                <h2 className='text-gray-700 text-4xl font-semibold'>Choose Your Plan</h2>
                <p className='text-gray-500 text-sm max-w-md mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
            </div>
            <div className='mt-14 '>
                {/* <PricingTable /> */}
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                    <p className="font-bold">Billing Disabled</p>
                    <p>The PricingTable component requires billing to be enabled in Clerk. It is disabled for local development.</p>
                </div>
            </div>
        </div>
    );
};

export default Plans;
