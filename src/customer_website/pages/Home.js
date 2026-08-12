import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import RecoveryProcess from "../components/RecoveryProcess";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function Home() {
  return (
    
    <>
    <Navbar/>
     <Hero/>
      <Statistics />
       <Services />
      <WhyChooseUs />
        <RecoveryProcess />
        <Testimonials />
        <CTA/>
        <Footer/>
    </>
  );
}

export default Home;