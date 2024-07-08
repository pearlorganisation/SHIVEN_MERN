import React from "react";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { RiUmbrellaFill } from "react-icons/ri";
import { IoMdCar } from "react-icons/io";
import { FiArrowUpCircle } from "react-icons/fi";
import { FaHandshake, FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Policies = () => {
  const faqsList = [
    {
      q: "Health Insurance",
      icon: <AiOutlineMedicineBox size={40} className="text-blue-500 px-2" />,
      desc: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
      path: `/health-insurance`,
    },
    {
      q: "Motor Insurance",
      icon: <RiUmbrellaFill size={40} className="text-pink-400 px-2" />,
      desc: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
      path: "/motor-insurance",
    },
    {
      q: "Travel Insurance",
      icon: <IoMdCar size={40} className="text-[#cfac72] px-2" />,
      desc: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
      path: "javascript:void(0)",
    },
    {
      q: "Business Insurance",
      icon: <FiArrowUpCircle size={40} className="text-green-400 px-2" />,
      desc: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
      path: "javascript:void(0)",
    },
    {
      q: "Loans",
      icon: <FaHandshake size={40} className="text-[#81e6d6] px-2" />,
      desc: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
      path: "javascript:void(0)",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-3xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Services We Provide
          </h3>
          <p className="text-black">
            Everything you need to know about the product. Can’t find the answer
            you’re looking for? feel free to{" "}
            <a
              className="text-indigo-600 font-semibold whitespace-nowrap"
              href="javascript:void(0)"
            >
              contact us
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <a href={item?.path}>
                <li
                  key={idx}
                  className="space-y-3 border bg-white p-4 rounded-xl cursor-pointer shadow-md"
                >
                  <summary className="flex items-center justify-between font-semibold text ">
                    <div className="flex justify-center items-center ">
                      <div className="text-xl italic text-yellow-700 font-bold">
                        {item.q}
                      </div>
                      <div>{item.icon}</div>
                    </div>
                  </summary>

                  <p className="text-black leading-relaxed">{item?.desc}</p>
                  <Link
                    to={item?.path}
                    className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Policies;
