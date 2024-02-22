import React from 'react';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import heroImage from '@/public/images/hero.svg';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='h-[70hv] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>

            <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>

                <div className='col-span-2'>
                    <h1 data-aos='fade-right' className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02063e] leading-[3.4rem] md:leading-[4rem] '>Exploring Innovative Paths to Cultivate Your Business </h1>
                    <p data-aos='fade-left'data-aos-delay='200' className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>Many small business owners start by publicizing their products and services through small social media campaigns or through a link in their Instagram bio. But when it comes to setting up a website, they often call in extra help to make it happen.</p>
                    <div data-aos="zoom-in" data-aos-delay="400" className=' flex items-center space-x-4 md:space-x-6 '>

                        <ButtonBlue text='Get Started'/>
                        <ButtonRed text='Explore Features'/>


                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="600"  className='col-span-3 hidden sm:block'>

                    <Image src={heroImage} alt='HeroImageBanner'></Image>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;