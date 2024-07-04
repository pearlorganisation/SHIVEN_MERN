import React from "react";

const Single_HealthPage = () => {
  return (
    <>
      <div className="mx-auto container border border-red-600">
        <section>
          <div className="max-w-8xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">
              Niva Bupa Health Insurance Plans
            </h1>
            <p className="mb-4">
              A leading health insurance company, Niva Bupa offers a number of
              health insurance plans to cater to the health insurance needs of
              its policyholders. Most of these plans are available at very
              affordable premiums and can be easily purchased with
              InsuranceDekho. Some of the best
              <a className="text-blue-600 underline" href="#">
                health insurance plans
              </a>
              that you can buy with Niva Bupa are as follows:{"\n      "}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Niva Bupa Health Premia Policy:</strong>
                The Niva Bupa Health Premia Policy can be purchased as both an
                individual and family floater health insurance plan. The
                coverage offered under this plan ranges between Rs. 5 lakhs to
                Rs. 7.5 lakhs. Some of the coverage offered under the Health
                Premia plan includes pre and post hospitalisation expenses,
                annual health check-ups, maternity expenses, and more.
                {"\n          "}
              </li>

              <li>
                <strong>Niva Bupa Health Companion:</strong>
                Another popular health insurance plan that you can buy with Niva
                Bupa is the Niva Bupa Health Companion. The Niva Bupa Health
                Companion provides coverage of up to Rs. 1 crore. It provides
                coverage for alternative treatment, day care procedures,
                no-claim bonus benefits, and many more.{"\n          "}
              </li>
              <li>
                <strong>Niva Corona Kavach Policy:</strong>
                The Niva Bupa Corona Kavach Policy as the name suggests provides
                coverage if the policyholder is diagnosed with COVID-19. It has
                a shorter waiting period and has a sum insured ranging between
                Rs. 50,000 - Rs. 5,00,000.{"\n          "}
              </li>
            </ul>
            <p>
              In addition to those listed above, some other plans that you can
              buy with Niva Bupa are Niva Bupa Money Saver, Niva Bupa Reassure,
              Niva Bupa Arogya Sanjeevani Policy, Niva Bupa Health Pulse, Niva
              Bupa Health Recharge, and a few more.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Single_HealthPage;
