import React from 'react';

interface Props{
    headingMini:string;
    headingPrimary:string;
}

const SectionHeader = ({headingMini,headingPrimary}:Props) => {
    return (
        <div className='text-center p-2'><p className='text-[#0b6cad] md:text-[16px] text-2xl text-[15px]'>{headingMini}</p>
        <h1 className=' mt-[0.5rem] text-5xl font-bold text-[22px]md:text-[30px] text-[#20073e]'>{headingPrimary}</h1>
            
        </div>
    );
};

export default SectionHeader;