import React from 'react';
import hero from '../../assets/hero.png'
const HeroSection = () => {
    return (
        <div >
            <img className='h-40 w-full lg:h-96 lg:w-screen'  src={hero} alt="" />
            <p className='text-3xl font-semibold mt-8 mb-8 px-12 text-center sm:text-xl'>
            Equipped with high quality and safest laboratory instruments <br /> inclusive of ACS,x Reagent and Lab-grade
             chemicals and dedicated to <br /> ensure Best-In-Class service all through the word</p>
        </div>
    );
};

export default HeroSection;