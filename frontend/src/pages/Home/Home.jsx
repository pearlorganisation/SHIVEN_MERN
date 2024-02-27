import React from "react";

import FinancialConsultant from "../../components/FinancialConsultant/FinancialConsultant";
import HeroSection from "./HeroSection";
import FeaturesCustomer from "../../components/FeaturesCustomer/FeaturesCustomer";
import Testimonial from "../../components/Testimonials/Testimonial";
import Faqs from "../../components/Faqs/Faqs";


const Home = () => {
  return (
    <div className="container mx-auto min-h-[90vh] grid place-items-center">
      <HeroSection />

     
      <FeaturesCustomer />

      <FinancialConsultant />

      <Testimonial />
      <Faqs/>
    </div>
  );
};

export default Home;
