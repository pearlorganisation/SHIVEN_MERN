import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const BlogCards = ({ data, }) => {
  return (
    <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-y-12 md:gap-y-0 sm:gap-x-6">
      {data?.map((item, idx) => (
        <div key={`blogCard${idx}`} className={`flex w-full flex-col justify-evenly items-center  bg-gradient-to-b from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}>
          <div className="w-[80%] -translate-y-16 md:-translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
            <LazyLoadImage alt=""  src={item?.banner ? item?.banner : item?.imgPath} className="w-full rounded-xl" width={"200px"} height={"372px"} />
          </div>
          <div className={`w-full h-[50%] flex flex-col ${item?.btnLink ? 'justify-between' : ''}  gap-4 items-center px-4`}>
            {item?.title?.length > 0 && (
              <div className="px-2 text-center font-bold text-[#F1F1F1] text-[18px] xl:text-[20px]">
                {item?.title}
              </div>
            )}
            {/* <div className="px-2 text-center text-[#F1F1F1] text-[16px] xl:text-[18px]">
              {item?.content}
            </div> */}
            {item?._id && (
              <div className="w-full">
                <Link to={`/blog/${item?._id}`} className="flex justify-center items-center hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full py-2 md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                  Learn More
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
