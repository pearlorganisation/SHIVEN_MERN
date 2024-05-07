// --------------------------------------------------Imports--------------------------------------------------
import React from "react";
import { MdOutlineCompare, MdSportsMotorsports } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import { FaCarAlt, FaHeart, FaMotorcycle } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { IoBoat } from "react-icons/io5";
// ----------------------------------------------------------------------------------------------------------

const MotorInsurance = () => {
  // ----------------------------------------------States-----------------------------------------------
  const insuranceTypeArray = [
    {
      title: "Motor",
      icon: () => {
        return <MdSportsMotorsports size={50} />;
      },
    },
    {
      title: "Bike",
      icon: () => {
        return <FaMotorcycle size={50} />;
      },
    },
    {
      title: "Car",
      icon: () => {
        return <FaCarAlt size={50} />;
      },
    },
    {
      title: "Motor Floater",
      icon: () => {
        return <IoBoat size={50} />;
      },
    },
  ];
  // --------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Hooks-----------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Functions-----------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  // ----------------------------------------------useEffect-----------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="container  mx-auto p-10 md:p-20 max-w-[80%] ">
        <div>
          <h1 className="text-xl md:text-2xl font-medium">Motor Insurance</h1>
        </div>

        <div className="py-2">
          <p>
            Motor insurance is a contract between the policyholder and the
            insurance company according to which the latter agrees to provide a
            sum assured called the death benefit in the event of an unfortunate
            demise of the life assured. In case of survival of the life assured
            throughout the policy tenure, a maturity benefit is paid to the life
            assured. One can also choose to get a compensation in case of a
            critical illness by opting a critical illness rider.
          </p>
        </div>

        <div>
          <h2 className="text-lg  font-medium">
            There are broadly two types of life insurance plans:
          </h2>
        </div>

        <div className="py-2">
          <p>1 Term Insurance or Pure Protection Plans</p>
        </div>

        <div className="py-2">
          <p>2 Investment</p>
        </div>

        <div>
          <p className="py-2">
            There are various types of life insurance plans namely term plans,
            child plans, retirment plans, money-back plans, and Unit-Linked
            Insurance Plans (ULIPs). Besides the term plans which are pure
            protection plans, all other types of plans offer an investment
            element to help meet the policyholder’s wealth creation
            requirements. It is important to note that the premium of these
            plans depends on a number of factors such as policyholder’s age,
            lifestyle, gender, and more. You must also check the inclusions and
            exclusions before actually buying this policy.
          </p>
        </div>
        <div
          class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
          id="frameworks-integration"
        >
          {insuranceTypeArray.map((type) => {
            return (
              <Link
                class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
                to={type?.path}
              >
                <span class="my-6 grid h-24 w-24 place-items-center justify-center">
                  {type?.icon()}
                  <h3 className="text-center">{type?.title}</h3>
                </span>
              </Link>
            );
          })}
        </div>
        <div>
          <h2 className="text-lg  font-medium">
            Different Types of Life Insurance
          </h2>
        </div>

        <div class="relative overflow-x-auto py-2">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Types
                </th>
                <th scope="col" class="px-6 py-3">
                  Overview
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Term Insurance
                </th>
                <td class="px-6 py-4">
                  Life cover is provided for a specific tenure at a fixed
                  premium
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Unit linked insurance
                </th>
                <td class="px-6 py-4">
                  Offers dual benefit of investment and insurance protection
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Endowment plan
                </th>
                <td class="px-6 py-4">
                  Offers the benefit of savings along with protection
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Whole life insurance
                </th>
                <td class="px-6 py-4">
                  Protection is offered for lifetime or till the age of 100
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Money back insurance
                </th>
                <td class="px-6 py-4">
                  Periodic payouts are made to the policyholder at specific
                  intervals
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pension plans
                </th>
                <td class="px-6 py-4">
                  Provides fixed amount at regular intervals to help you take
                  care of post retirement expenses
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto py-16 px-4 bg-gray-100 my-20">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Why Choose Shiven
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <MdOutlineCompare size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Intra plan comparison
                </h3>
                <p className="text-gray-600 text-center">
                  Compare for the best pricing and find the right plan for your
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <BiSupport size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Expert Claim support
                </h3>
                <p className="text-gray-600 text-center">
                  Get support during your claim request for a smooth &
                  hassle-free experience.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <SiAdguard size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Additional riders
                </h3>
                <p className="text-gray-600 text-center">
                  To provide extra benefits as add ons, customizing your plan
                  further.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text text-center text-xl md:text-2xl font-medium">
              What is Life Insurance?
            </h1>
            <p className="p-5">
              It is a contract between the policyholder and the insurance
              company according to which the latter agrees to provide a sum
              assured called the death benefit in the event of an unfortunate
              demise of the life assured. In case of survival of the life
              assured throughout the policy tenure, a maturity benefit is paid
              to the life assured. One can also choose to get compensation in
              case of a critical illness by opting for the same via a critical
              illness rider. There are various types of life insurance plans
              namely term plans, child plans, retirement plans, money-back
              plans, and Unit-Linked Insurance Plans (ULIPs). Besides the term
              plans which are pure protection plans, all other types of these
              plans offer an investment element to help meet the policyholder’s
              wealth creation requirements.
            </p>
          </div>

          <div className="py-5">
            <h1 className="text text-center text-xl md:text-2xl font-medium">
              How Does Life Insurance Work?
            </h1>
            <p className="p-5">
              Life insurance is a common option considered by many people for
              financial planning to secure their future. A life insurance policy
              like term insurance plan can help you ensure financial protection
              of your family in case of your unforeseen demise. Now, at the time
              of purchasing a life insurance policy it is essential for you to
              understand how a life insurance policy works and how your
              nominees/beneficiary can receive the proceeds of your life
              insurance policy.
            </p>
            <p className="p-5">
              A life insurance policy is a contract between the policyholder and
              the insurance provider wherein the insurance provider promises to
              provide life cover to the life assured in exchange of regular
              premium payments. The life assured is the person who is insured
              under the life insurance policy and the policyholder may or may
              not be the life assured but can be the person who purchases the
              life insurance policy. The policyholder/life assured can choose to
              pay premiums on an annual, semi-annual, quarterly or monthly
              basis.
            </p>
            <p className="p-5">
              Life insurance is not very complicated to understand, in exchange
              of regular premiums the insurance companies provide life cover to
              an individual. Let us understand the same with an example: Mr.
              Sinha is 35 years old and has a family consisting of wife, a son,
              and dependant parents. Since he has financial dependents, he
              chooses a life insurance with higher coverage. Now, the insurance
              company asks him to pay a specific amount as premium to get life
              insurance coverage. The life insurance premium needs to pay on
              regular intervals to get the relevant coverage.
            </p>
          </div>

          <h1 className="text text-center text-xl md:text-2xl font-medium">
            Key Features of Life Insurance Policy
          </h1>
          <p className="text-center">
            Apart from providing basic coverage following are the key features
            of a life insurance policy:
          </p>
        </div>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Key Features
                </th>
                <th scope="col" class="px-6 py-3">
                  Benefits Offered
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Death Benefits
                </th>
                <td class="px-6 py-4">
                  Under this policy, death benefit shall be provided to the
                  nominee in case of an untimely death of the life assured
                  during the policy tenure. The death benefit amount can help
                  your financial independents to fulfil their daily financial
                  requirements and goals in your absence. A life insurance
                  policy helps you create financial security for your loved ones
                  even in your absence.
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Investment Component
                </th>
                <td class="px-6 py-4">
                  It also act as an investment component if one chooses to
                  invest in ULIPs, Money Back and Endowment plans as these plans
                  provide dual benefits of life cover and investments, such
                  plans provide returns on investments. Money Back and Endowment
                  plans provide additional bonuses based on the performance of
                  the insurer.
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tax Exemptions
                </th>
                <td class="px-6 py-4">
                  The benefits under this policy help the family of the life
                  assured build a safe and secured future even in the absence of
                  the life assured. Moreover, under Section 80C and 10(10D) of
                  the Income Tax Act, 1961 one can avail income tax benefits by
                  investing in a life insurance policy. Premiums paid towards
                  this policy qualify for tax exemptions.
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maturity Benefits
                </th>
                <td class="px-6 py-4">
                  Some life insurance policies provide a maturity benefit at the
                  end of the policy term in case the life assured has survived
                  the entire policy tenure. The maturity benefit helps an
                  individual to fulfill his/her financial goals over a period of
                  time.
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tax Exemptions
                </th>
                <td class="px-6 py-4">
                  The benefits under this policy help the family of the life
                  assured build a safe and secured future even in the absence of
                  the life assured. Moreover, under Section 80C and 10(10D) of
                  the Income Tax Act, 1961 one can avail income tax benefits by
                  investing in a life insurance policy. Premiums paid towards
                  this policy qualify for tax exemptions.
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Additional Coverage
                </th>
                <td class="px-6 py-4">
                  You can also choose to increase the scope of coverage of the
                  base policy by opting for an adequate rider which are
                  additional coverages that come in exchange for an additional
                  premium. These additional coverages increase the coverage of
                  the life insurance policy. Some common riders opted with a
                  life insurance policy are Accidental Total and Permanent
                  Disability, Accidental Death Benefit, Critical Illness Rider,
                  Accelerated Terminal Illness Rider etc.
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Collateral for Loan
                </th>
                <td class="px-6 py-4">
                  Some life insurance policies offer loans against the policy
                  feature which can help an individual to fulfill urgent
                  financial requirements such as treatment for medical
                  emergencies or help an individual to fulfil financial
                  obligations which cannot be avoided.
                </td>
              </tr>

              <tr class="bg-white dark:bg-gray-800 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Flexible Premium Payments
                </th>
                <td class="px-6 py-4 ">
                  Under this policy premium can be paid on a monthly, quarterly,
                  half-yearly or yearly basis. Life assured is given the
                  flexibility to choose the premium payment mode and frequency.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="p-5">
            <h1 className="text text-center text-lg font-medium">
              Types of Life Insurance Plans
            </h1>
            <p className="py-2">
              As already stated, life insurance plans are broadly categorised
              into two types, term insurance plans, and investment plans. Let’s
              understand these types in detail in the section below:
            </p>
            <h1 className="text text-lg font-medium">Term Insurance</h1>
            <p>
              A term insurance is one of the most affordable type of plan that
              provides protection to the nominees in case the policyholder meets
              an unfortunate death. The financial coverage is given on the basis
              of the premium that the policyholder pays during the policy term.
            </p>
            <p className="py-2">
              Further a term insurance plan is also classified into the
              following:
            </p>
            <ul className="list-disc p-4">
              <li>
                Return of Premium Term Insurance: This is a type of term
                insurance plan that provides a survival benefit in case the
                policyholder outlives the policy term. Moreover, the entire
                premium that is paid is also paid back to the policyholder if
                the policyholder survives.
              </li>
              <br />
              <li>
                Whole Life Insurance: Whole life insurance plan provides term
                insurance coverage to the policyholder till the age of 100
                years. So, if you want a longer coverage for your family, then
                this plan is the best-suited for you.
              </li>
              <br />
              <li>
                Zero Cost Term Insurance: Under this type of term insurance
                plan, a policyholder can make an exit from their term insurance
                plan at any point of the policy term and still get all the
                premiums back.
              </li>
              <br />
              <li>
                Increasing Term Insurance: Increasing Term Insurance is one
                where the term insurance coverage increases over the policy term
                at a specific rate.
              </li>
              <br />
              <li>
                Decreasing Term Insurance: On the other hand, in decreasing term
                insurance, the coverage decreases at a specific rate over the
                policy term.
              </li>
              <br />
            </ul>
          </div>

          <div className="p-5">
            <h1 className="text  text-lg font-medium">Investment</h1>
            <p className="py-2">
              An investment plan is one where you pay a specific amount during
              the policy term to get guaranteed returns over the long run. Some
              of the different types of investment plans that you can consider
              buying are as follows:
            </p>

            <ul className="list-disc p-4">
              <li>
                ULIP: ULIP or Unit Linked Insurance Plan which provides dual
                benefits of both insurance and investment. It is a market-linked
                investment plan and thus you must keep the risk appetite in mind
                before investing in ULIP.
              </li>
              <br />
              <li>
                Endowment Plans: This type of investment plan provides both
                survival and death benefits. A maturity benefit is paid out to
                the policyholder after a specific duration, while life insurance
                benefit is given in case the policyholder meets an unfortunate
                demise.
              </li>
              <br />
              <li>
                Retirement Plans: If you are looking for an investment plan that
                will be helpful in creating a corpus for your retirement, then
                you must invest in a retirement plan. There are a number of
                companies that offer retirement or pension plans at affordable
                rates.
              </li>
              <br />
              <li>
                Child Plans: As the name suggests, this type of plan is suitable
                to meet the financial needs of your child such as funding their
                education. A child plan remains active even if the policyholder
                passes away and the balance premium is later paid back by the
                insurer.
              </li>
              <br />
            </ul>
          </div>

          <div>
            <h1 className="text text-center text-lg font-medium">
              Benefits of Life Insurance
            </h1>
            <p>
              There are several benefits of having a life insurance policy. Life
              insurance is a financial tool which can help an individual create
              a financial net for their loved ones in case anything unforeseen
              happens to the life assured. It not only helps an individual to
              financially secure the future for their loved ones but also helps
              them save their earnings for a better future. Life insurance is
              one essential part of one’s financial plan. Most people use life
              insurance policies to ensure that the beneficiaries who may suffer
              financial hardships in the absence of the life assured have
              financial resources to fulfil their daily financial requirements
              and pursue their dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-3 p-10 ">
            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <FaHeart className="text-[#2563EB]" size={30} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Life Cover</h1>
              </div>
              <div>
                <p>
                  Life Insurance helps create a sense of peace of mind for an
                  individual because it ensures a financially secured future for
                  the loved ones of the life assured in his/her absence. Life
                  insurance also provides financial aid at the time of medical
                  emergencies thereby decreasing the family’s stress to arrange
                  funds during difficult times.
                </p>
              </div>
            </div>

            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <CiFaceSmile className="text-[#2563EB]" size={30} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Peace of Mind</h1>
              </div>
              <div>
                <p>
                  Purchasing a life insurance policy can help one ensure the
                  financial stability of their loved ones in the future. In case
                  of a death of life assured, a life insurance plan pays out a
                  death benefit to the nominee which can help the family to
                  clear out debts or any other liabilities and maintain their
                  standard of living.
                </p>
              </div>
            </div>

            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <CiSearch className="text-[#2563EB]" size={30} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Financial Stability</h1>
              </div>
              <div>
                <p>
                  Purchasing a life insurance policy can help one ensure the
                  financial stability of their loved ones in the future. In case
                  of a death of life assured, a life insurance plan pays out a
                  death benefit to the nominee which can help the family to
                  clear out debts or any other liabilities and maintain their
                  standard of living.
                </p>
              </div>
            </div>

            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <GiReceiveMoney className="text-[#2563EB]" size={30} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Tax Benefits</h1>
              </div>
              <div>
                <p>
                  Life insurance premiums qualify for a tax deduction of up to
                  Rs. 1.5 Lakh under Section 80C of the Income Tax Act. Also,
                  the life insurance proceeds qualify for a tax exemption under
                  Section 10(10D), if the premium is up to 10% of the sum
                  assured or the sum assured is at least 10 times of the premium
                  amount of the life insurance plan.
                </p>
              </div>
            </div>

            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <TbPigMoney className="text-[#2563EB]" size={30} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Assured Income Benefit</h1>
              </div>
              <div>
                <p>
                  Some life insurance plans offer an option to receive the death
                  or maturity sum assured by way of regular income on periodic
                  intervals as monthly, quarterly, half-yearly, or yearly
                  instalments. This helps the life assured enjoy the benefits of
                  the plan as an assured flow of regular income.
                </p>
              </div>
            </div>

            <div className="p-5 shadow-lg py-5">
              <div className="p-2">
                <GiTakeMyMoney className="text-[#2563EB]" size={25} />
              </div>
              <div className="text text-lg font-medium ">
                <h1>Loan Facility</h1>
              </div>
              <div>
                <p>
                  Most of the life insurance plans provide an option to avail a
                  loan at a nominal interest rate to meet urgent financial
                  requirements. This helps the life assured to enjoy a
                  substantial amount of liquidity with the help of the life
                  insurance plan. The loan facility is generally available with
                  ULIPs, Endowment Plans and Child Plans.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text text-center text-lg md:text-xl font-medium">
              Partner Life Insurance Companies
            </h1>
            <p className="text text-center">
              In India, there are 24 life insurance companies which offer life
              insurance plans. Here are some of the most popular life insurance
              providers
            </p>

            <div className="py-10">
              <Swiper
                slidesPerView={3} // Show 1 slide per view on mobile screens
                spaceBetween={30}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 2, // Show 2 slides per view on tablet screens (width >= 640px)
                  },
                  1024: {
                    slidesPerView: 3, // Show 3 slides per view on desktop screens (width >= 1024px)
                  },
                }}
              >
                <SwiperSlide>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center p-0">
                      <img
                        class="rounded-t-lg"
                        src="https://healthstatic.insurancedekho.com/prod/oem/20210615223701.jpg"
                        alt=""
                      />
                    </div>
                    <div class=" py-0 ">
                      <a href="#">
                        <h5 class="mb-2  text text-center  text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                          Edelweiss Tokio Life Insurance
                        </h5>
                      </a>

                      <div className="flex justify-center">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            out of
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center p-0">
                      <img
                        class="rounded-t-lg"
                        src="https://healthstatic.insurancedekho.com/prod/oem/20210609170542.jpg"
                        alt=""
                      />
                    </div>
                    <div class=" py-0 ">
                      <a href="#">
                        <h5 class="mb-2  text text-center  text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                          Aditya Birla Sun Life Insurance
                        </h5>
                      </a>

                      <div className="flex justify-center">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            out of
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center p-0">
                      <img
                        class="rounded-t-lg"
                        src="https://healthstatic.insurancedekho.com/prod/oem/20210609170517.jpg"
                        alt=""
                      />
                    </div>
                    <div class=" py-0 ">
                      <a href="#">
                        <h5 class="mb-2  text text-center  text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                          Kotak Life Insurance
                        </h5>
                      </a>

                      <div className="flex justify-center">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            out of
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center p-0">
                      <img
                        class="rounded-t-lg"
                        src="https://healthstatic.insurancedekho.com/prod/oem/20210609170407.jpg"
                        alt=""
                      />
                    </div>
                    <div class=" py-0 ">
                      <a href="#">
                        <h5 class="mb-2  text text-center  text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                          MaxLife Insurance
                        </h5>
                      </a>

                      <div className="flex justify-center">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            out of
                          </p>
                          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotorInsurance;
