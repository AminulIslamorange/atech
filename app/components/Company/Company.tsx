import Image from 'next/image';
import React from 'react';
import companyIMg from '@/public/images/customer.png'

const Company = () => {
    return (
        <div className='pt-[6rem] pb-[3rem]'>
            <h1 className='mb-[1.5rem] font-bold text-4xl text-center '>Company who also worked with us</h1>
            <p className='w-[90%] sm:w-[85%]  md:w-[75%] lg:w-[65%] mx-auto text-center text-gray-950 opacity-80'>Most small businesses have a lot of personality. Color choices and layout can communicate broad aspects of a business’s personality and style, but typography can communicate nuances in personality, industry, and style in a split second. While legibility should always be the priority in body text, feel free to experiment in headings with distinctive display fonts. For example, consider using an all-caps, handwriting, or graffiti font to represent an important theme, evoke a key era, or express the brand identity.</p>
            <p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600 '>Explore Details</p>
            <div className='mt-[2rem] text-center w-[80%] mx-auto'>
               <Image src={companyIMg} alt='CompanyImg'/>
               
            </div>
            
        </div>
    );
};

export default Company;