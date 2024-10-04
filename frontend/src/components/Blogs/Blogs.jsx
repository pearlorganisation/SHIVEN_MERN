import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import axios from "axios";
// import Pagination from "@mui/material/Pagination";
// import { styled } from "@mui/material";
// import DOMPurify from "dompurify";
import Skeleton from "@mui/material/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Helmet} from "react-helmet"

// const StyledPagination = styled(Pagination)(({ theme }) => ({
//   "& .MuiPaginationItem-root": {
//     color: "white",
//   },
// }));

const Blogs = () => {
  const [blogData, setBlogData] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
//   const [page, setPage] = useState(searchParams.get("page") || 1);
//   const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     if(!searchParams) setSearchParams({page: 1})
  //   })

//   const sanitizeData = (data) => {
//     let cleanData = data.map((item) => {
//       item.content = DOMPurify.sanitize(item.content);
//       return item;
//     });
//     if(cleanData.length > 0) setBlogData(cleanData);
//   };

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/blogs?page=${page}`)
//       .then((res) => {
//         setIsLoading(false);
//         sanitizeData(res.data.blogsData);
//         setTotalPages(res?.data?.totalPages);
//       })
//       .catch((err) => {
//       // console.log(err);
//         setIsLoading(false);
//       });
//   }, [page]);

//   const handlePagination = (e, p) => {
//     setPage(p);
//     setSearchParams({ page: p });
//   };

useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 2000)
}, [])


  return (
    <>
      <Helmet>
        <title>
        Shiven Blogs
        </title>
        {/* <meta
          name="description"
          content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator"
        /> */}
      </Helmet>
    <div className="min-h-screen grid place-items-center">
      <section className="py-28 flex flex-col gap-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-10 lg:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-black">
              Our Latest Blog Posts
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Discover the latest insights, trends, and stories from our team of
              experts.
            </p>
          </div>
          {isLoading ? (
            <div className="flex flex-wrap justify-center items-center w-full text-center gap-12 px-2 md:px-0">
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={250}
                  className="rounded-t-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[150px] sm:!w-[350px] sm:!h-[250px]"
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={350}
                  height={30}
                  className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {blogData ? (
                blogData.map((item) => {
                  return (
                    <Link
                      to={`/blog/${item?.slug}`}
                      className="rounded-lg group overflow-hidden shadow-lg cursor-pointer transition duration-300"
                    >
                      <LazyLoadImage
                        alt="Blog Post 1"
                        className="w-full h-56 object-cover"
                        height={400}
                        src={item?.banner}
                        style={{
                          aspectRatio: "1920/1080",
                          objectFit: "cover",
                        }}
                        width={600}
                      />
                      <div className="p-4 md:p-6 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-[#02AFDC] group-hover:to-[#2563EB] transition duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                          {item?.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full text-center text-2xl">
                  No Blogs Found.
                </div>
              )}
            </div>
          )}
        </div>
        {!isLoading && blogData && (
          <div className="flex flex-row justify-center w-full">
            <StyledPagination
              count={totalPages}
              page={Number(page)}
              color="primary"
              onChange={handlePagination}
            />
          </div>
        )}
      </section>
    </div>
    </>
  );
};

export default Blogs;
