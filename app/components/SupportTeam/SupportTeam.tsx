import React from 'react';
import icon1 from '@/public/images/icon1.png';
import icon2 from '@/public/images/icon2.png';
import suppportTeam from '@/public/images/supportteam.jpg';
import Image from 'next/image';



const SupportTeam = () => {
    return (
        <div className='pt-[7rem] pb-[3rep]'>
            <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Do you need help? Our Support team ready to help you.</h1>
                    <p className='text-gray-900 opacity-90 text-[17px] mt-[1rem] ' >This site includes a table comparing the Standard Bots product to its closest competitors. This kind of table is an excellent idea for pricier products, especially new ones competing with more well-known alternatives.</p>
                    <div className='flex items-center space-x-6 mt-[2rem]'>
                        <Image src={icon1} alt='suporIcon' width={50} height={60} />
                        <div>
                            <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Email Support</h1>
                            <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>If you want to support on Email please email us.Our Costumar manager will help you.</p>

                        </div>
                    </div>
                    <div className='flex items-center space-x-6 mt-[2rem]'>
                        <Image src={icon2} alt='suporIcon' width={50} height={60} />
                        <div>
                            <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Live Support</h1>
                            <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>If you want to Live Support please email us.Our Costumar manager will help you on Google Meet.</p>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aso-anchor-placement='top-center'>
                    <Image src={suppportTeam} alt='supportManagerPic'></Image>
                </div>
            </div>

        </div>
    );
};

export default SupportTeam;