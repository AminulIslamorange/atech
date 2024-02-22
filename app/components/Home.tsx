'use client';

import { useEffect } from "react";
import Company from "./Company/Company";
import CustomerSaport from "./CustomerSaport/CustomerSaport";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import PriceSection from "./PriceSevtion/PriceSection";
import SupportTeam from "./SupportTeam/SupportTeam";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            easing:'ease',
            once:true,
            anchorPlacement:'top-bottom'

        });
    },[]);
    return (
        <div> 
            <Hero/>
            <Feature/>
            <CustomerSaport/>
            <PriceSection/>
            <SupportTeam/>
            <Company/>
            
            
            
            
        </div>
    );
};

export default Home;
