import React from "react";
import Policies from "../../components/Policies/Policies";
import FinancialConsultant from "../../components/FinancialConsultant/FinancialConsultant";
import HeroSection from "./HeroSection";
import FeaturesCustomer from "../../components/FeaturesCustomer/FeaturesCustomer";
import Testimonial from "../../components/Testimonials/Testimonial";

const Home = () => {
  return (
    <div className="container mx-auto min-h-[90vh] grid place-items-center">
      <HeroSection />

      <Policies />
      <FeaturesCustomer />

      <FinancialConsultant />

      <Testimonial />
    </div>
  );
};

export default Home;
