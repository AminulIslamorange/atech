import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import PriceCard from './PriceCard';

const PriceSection = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <SectionHeader headingMini='Deal for your business' headingPrimary='Meet our pricing plan that suit you'/>
            <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                <div data-aos="fade-right" data-aso-anchor-placement='top-center'>
                    {/* priceCard Components */}
                    <PriceCard bg='bg-[#81124a]' price='99.99'num='1' plan='starter'/>
                </div>
                <div data-aos="fade-top" data-aso-anchor-placement='top-center'data-aos-delay="200">
                    {/* priceCard Components */}
                    <PriceCard bg='bg-[#22820c]' price='109.9'num='2' plan='Primium Pack'/>
                </div>
                <div data-aos="fade-left" data-aso-anchor-placement='top-center'data-aos-delay="400">
                    {/* priceCard Components */}
                    <PriceCard bg='bg-[#112c60]' price='89.99'num='1' plan='Ultimate'/>
                </div>
            </div>
            
        </div>
    );
};

export default PriceSection;