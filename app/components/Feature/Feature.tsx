import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import FeatureCard from './FeatureCard';
import icon1 from '@/public/images/icon1.png';
import icon2 from '@/public/images/icon2.png';
import icon3 from '@/public/images/icon3.png';
import icon4 from '@/public/images/icon4.png';
import icon5 from '@/public/images/icon5.png';

const Feature = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
          {/* section heading for this */}
          <SectionHeader headingMini='Ideal solution for you' headingPrimary='Explor Ultimate features'/>

          <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon1.src}/>
            </div>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon2.src}/>
            </div>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'data-aos-delay='200'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon3.src}/>
            </div>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'data-aos-delay='400'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon4.src}/>
            </div>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'data-aos-delay='600'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon5.src}/>
            </div>
            <div data-aos='zoom in' data-aos-anchor-placement='top-center'data-aos-delay='800'>

                {/* its for feature card */}
                <FeatureCard title="Email Subscription" image={icon2.src}/>
            </div>
          </div>
            
        </div>
    );
};

export default Feature;