
"use client";
import { useState } from "react";
import MobailNav from "./MobailNav";
import Nav from "./Nav";


const ResponsiveNav = () => {
    const [showNav,setShowNav]=useState(false);
    const showNavHandler=()=>setShowNav(true);
    const closeNabHandler=()=>setShowNav(false)
    
    
    
    return (
        <div>
            <Nav openNav={showNavHandler}/>
            <MobailNav nav={showNav} closeNav={closeNabHandler}/>
            
        </div>
    );
};

export default ResponsiveNav;