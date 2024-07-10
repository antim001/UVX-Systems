import {useContext} from 'react';
import Layout from './../../components/Layout/Layout';
import HeroSection from './../../components/heroSection/HeroSection';
// import Category from './../../components/category/Category';
import HomePageProductCard from './../../components/homePageProductCard/HomePageProductCard';

//import Testimonial from './../../components/testimonial/Testimonial';
import myContext from './../../context/MyContext';
import Loader from './../../components/loader/Loader';
import Mission from './../../components/Mission/Mission';
import Contact from './../../components/Contact/Contact';

const Home = () => {
    

    return (
        <Layout>
            <HeroSection></HeroSection>
            {/* <Category></Category> */}
            <HomePageProductCard></HomePageProductCard>
          
            {/* <Testimonial></Testimonial> */}
            <Mission></Mission>
           <Contact></Contact>
        </Layout>
    );
};

export default Home;