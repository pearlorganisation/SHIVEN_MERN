import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import axios from "axios";
// import Pagination from "@mui/material/Pagination";
// import { styled } from "@mui/material";
// import DOMPurify from "dompurify";
import Skeleton from "@mui/material/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import { Modal } from "@mui/material";

// const StyledPagination = styled(Pagination)(({ theme }) => ({
//   "& .MuiPaginationItem-root": {
//     color: "white",
//   },
// }));

const NotificationCirculars = () => {
  const [data, setData] = useState(null);
  //   const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  //   const [page, setPage] = useState(searchParams.get("page") || 1);
  //   const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     if(!searchParams) setSearchParams({page: 1})
  //   })

  // modal states
  const [previewData, setPreviewData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setPreviewData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  //   const sanitizeData = (data) => {
  //     let cleanData = data.map((item) => {
  //       item.content = DOMPurify.sanitize(item.content);
  //       return item;
  //     });
  //     if(cleanData.length > 0) setnotificationData(cleanData);
  //   };

  //   useEffect(() => {
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/notifications?page=${page}`)
  //       .then((res) => {
  //         setIsLoading(false);
  //         sanitizeData(res.data.notificationsData);
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

  const sampleData = [
    {
      _id: "11dafgdag1",
      title: "notification 1",
      banner:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "lorem ipsum dores floren dusk till dawn pillowtalk lied to golden befour its youDusk Till Dawn, Icarus Falls, What Makes You Beautiful, Up All Night, Night Changes, Steal My Girl, Four, Kiss You, Take Me Home, Best Song Ever, Midnight Memories, Magic, A Whole New World, Aladdin, Perfect, Story of My Life, You & I, I Don’t Wanna Live Forever, Fifty Shades Darker: Original Motion Picture Soundtrack, Right Now, Midnight Memories, Olivia, Made in the A.M., One Thing, Up All Night, PILLOWTALK, Drag Me Down, Made in the A.M., Live While We're Young, Take Me Home, They Don't Know About Us, Take Me Home, 18, Four, Stockholm Syndrome, Four, Little Things, Take Me Home, Strong, Midnight Memories, You Don't Know You're Beautiful, One Way or Another, Midnight Memories, Let Me, Icarus Falls, History, No Control, Four, Still the One, Take Me Home, Walking in the Wind, Made in the A.M., Love Like This, Love Like This, What I Am, Room Under the Stairs",
    },
    {
      _id: "11dafgdag2",
      title: "notification 2",
      banner:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Dusk Till Dawn, Icarus Falls, What Makes You Beautiful, Up All Night, Night Changes, Steal My Girl, Four, Kiss You, Take Me Home, Best Song Ever, Midnight Memories, Magic, A Whole New World, Aladdin, Perfect, Story of My Life, You & I, I Don’t Wanna Live Forever, Fifty Shades Darker: Original Motion Picture Soundtrack, Right Now, Midnight Memories, Olivia, Made in the A.M., One Thing, Up All Night, PILLOWTALK, Drag Me Down, Made in the A.M., Live While We're Young, Take Me Home, They Don't Know About Us, Take Me Home, 18, Four, Stockholm Syndrome, Four, Little Things, Take Me Home, Strong, Midnight Memories, You Don't Know You're Beautiful, One Way or Another, Midnight Memories, Let Me, Icarus Falls, History, No Control, Four, Still the One, Take Me Home, Walking in the Wind, Made in the A.M., Love Like This, Love Like This, What I Am, Room Under the Stairs",
    },
    {
      _id: "11dafgdag3",
      title: "Notification 3",
      banner:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Dusk Till Dawn, Icarus Falls, What Makes You Beautiful, Up All Night, Night Changes, Steal My Girl, Four, Kiss You, Take Me Home, Best Song Ever, Midnight Memories, Magic, A Whole New World, Aladdin, Perfect, Story of My Life, You & I, I Don’t Wanna Live Forever, Fifty Shades Darker: Original Motion Picture Soundtrack, Right Now, Midnight Memories, Olivia, Made in the A.M., One Thing, Up All Night, PILLOWTALK, Drag Me Down, Made in the A.M., Live While We're Young, Take Me Home, They Don't Know About Us, Take Me Home, 18, Four, Stockholm Syndrome, Four, Little Things, Take Me Home, Strong, Midnight Memories, You Don't Know You're Beautiful, One Way or Another, Midnight Memories, Let Me, Icarus Falls, History, No Control, Four, Still the One, Take Me Home, Walking in the Wind, Made in the A.M., Love Like This, Love Like This, What I Am, Room Under the Stairs",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setData(sampleData);
    }, 500);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shiven Notifications / Circulars</title>
        {/* <meta
          name="description"
          content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator"
        /> */}
      </Helmet>
      <div className="min-h-screen grid place-items-center">
        <section className="py-28 flex flex-col w-full gap-10">
          <div className="container px-4 w-full">
            <div className="mb-8 md:mb-10 lg:mb-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-black">
                Notifications / Circulars
              </h2>
              {/* <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Discover the latest insights, trends, and stories from our team
                of experts.
              </p> */}
            </div>
            {isLoading ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 px-2 md:px-0">
                <div className="flex flex-col gap-2">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={550}
                    height={250}
                    className="w-full rounded-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !h-[150px] sm:!h-[250px]"
                  />
                  {/* <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={350}
                    height={30}
                    className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                  /> */}
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={550}
                    height={250}
                    className="rounded-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !h-[150px] sm:!h-[250px]"
                  />
                  {/* <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={350}
                    height={30}
                    className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                  /> */}
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={550}
                    height={250}
                    className="w-full rounded-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !h-[150px] sm:!h-[250px]"
                  />
                  {/* <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={350}
                    height={30}
                    className="rounded-b-2xl !bg-emerald-800 after:!bg-gradient-to-r after:!from-emerald-800 after:!via-emerald-700 after:!to-emerald-800 !w-[250px] !h-[20px] sm:!w-[350px] sm:!h-[30px]"
                  /> */}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data ? (
                  data.map((item) => {
                    return (
                      <div  
                        onClick={() => handleOpen(item)}
                        className="rounded-2xl w-full group overflow-hidden shadow-lg cursor-pointer transition duration-300"
                      >
                        {/* <LazyLoadImage
                          alt="notification Post 1"
                          className="w-full h-56 object-cover"
                          height={400}
                          src={item?.banner}
                          style={{
                            aspectRatio: "1920/1080",
                            objectFit: "cover",
                          }}
                          width={600}
                        /> */}
                        <div className="p-4 md:p-6 bg-white text-black group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-[#02AFDC] group-hover:to-[#2563EB] !h-[150px] sm:!h-[250px] transition duration-300">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                            {item?.title}
                          </h3>
                          <h4 className="text-lg mb-2 line-clamp-6">
                            {item?.content}
                          </h4>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full text-center text-2xl">
                    No Notifications Found.
                  </div>
                )}
              </div>
            )}
          </div>
          {/* {!isLoading && data && (
            <div className="flex flex-row justify-center w-full">
              <StyledPagination
                count={totalPages}
                page={Number(page)}
                color="primary"
                onChange={handlePagination}
              />
            </div>
          )} */}
        </section>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative w-[95vw] md:w-[60vw] bg-white shadow-[0_0_0_1px#ffdd00] rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
          <div className="p-4 md:p-6 text-black grid grid-cols-1 gap-4 justify-center">
            <div className="text-2xl font-bold">{previewData?.title}</div>
            <div className="text-lg">{previewData?.content}</div>

          </div>
        </div>
      </Modal>
    </>
  );
};

export default NotificationCirculars;
