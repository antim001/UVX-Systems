import React from 'react';
import Layout from './../../components/Layout/Layout';
import HeroSection from './../../components/heroSection/HeroSection';
import Category from './../../components/category/Category';
import HomePageProductCard from './../../components/homePageProductCard/HomePageProductCard';
import Track from './../../components/track/Track';
import Testimonial from './../../components/testimonial/Testimonial';

const Home = () => {
    return (
        <Layout>
            <HeroSection></HeroSection>
            <Category></Category>
            <HomePageProductCard></HomePageProductCard>
            <Track/>
            <Testimonial></Testimonial>
        </Layout>
    );
};

export default Home;