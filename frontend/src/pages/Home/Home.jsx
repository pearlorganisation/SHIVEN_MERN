import React from "react";

import FinancialConsultant from "../../components/FinancialConsultant/FinancialConsultant";
import HeroSection from "./HeroSection";
import FeaturesCustomer from "../../components/FeaturesCustomer/FeaturesCustomer";
import Testimonial from "../../components/Testimonials/Testimonial";
import Faqs from "../../components/Faqs/Faqs";
import AllinsuranceQuote from "../../components/insurance_quotation/AllinsuranceQuote";
import HealthPremium from "../../components/CheckPremium/HealthPremium";
import Policies from "../../components/Policies/Policies";
const Home = () => {
  return (
    <div className="mx-auto min-h-[90vh] grid place-items-center">
      <HeroSection />
      {/* <AllinsuranceQuote /> */}
      <Policies />

      <FeaturesCustomer />
      <FinancialConsultant />
      <Testimonial />
      <Faqs />
    </div>
  );
};

export default Home;
