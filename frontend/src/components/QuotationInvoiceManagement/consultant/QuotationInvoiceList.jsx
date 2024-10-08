import { Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
// import { instance } from "../../services/axiosInterceptor";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "black",
  },
}));

const QuotationInvoiceList = () => {
  const [data, setData] = useState(null);
  //   const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  //   const [page, setPage] = useState(searchParams.get("page") || 1);
  //   const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //   const getData = () => {
  //     setIsLoading(true);
  //     instance
  //       .get(`/specialTrips`)
  //       .then((res) => {
  //         setData(res?.data?.data);
  //         setTotalPages(res?.data?.totalPages)
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsLoading(false);
  //       });
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, [page]);

  //   const handlePagination = (e, p) => {
  //     setPage(p);
  //     setSearchParams({ page: p });
  //   };

  //   const deleteItem = (item) => {
  //     if (window.confirm(`Are you sure you want to delete specialTrip`)) {
  //       instance
  //         .delete(`${import.meta.env.VITE_API_URL}/specialTrips/${item._id}`)
  //         .then((res) => {
  //           toast.success(res.data.message, {
  //             style: {
  //               background: "green",
  //               color: "white",
  //             },
  //           });
  //           getData();
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           toast.error("There was some issue deleting the specialTrip", {
  //             style: {
  //               background: "red",
  //               color: "white",
  //             },
  //           });
  //         });
  //     }
  //   };

  const sampleData = [
    {
      _id: "11dafgdag1",
      title: "Notification / Circular 1",
      banner:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "lorem ipsum dores floren dusk till dawn pillowtalk lied to golden befour its youDusk Till Dawn, Icarus Falls, What Makes You Beautiful, Up All Night, Night Changes, Steal My Girl, Four, Kiss You, Take Me Home, Best Song Ever, Midnight Memories, Magic, A Whole New World, Aladdin, Perfect, Story of My Life, You & I, I Don’t Wanna Live Forever, Fifty Shades Darker: Original Motion Picture Soundtrack, Right Now, Midnight Memories, Olivia, Made in the A.M., One Thing, Up All Night, PILLOWTALK, Drag Me Down, Made in the A.M., Live While We're Young, Take Me Home, They Don't Know About Us, Take Me Home, 18, Four, Stockholm Syndrome, Four, Little Things, Take Me Home, Strong, Midnight Memories, You Don't Know You're Beautiful, One Way or Another, Midnight Memories, Let Me, Icarus Falls, History, No Control, Four, Still the One, Take Me Home, Walking in the Wind, Made in the A.M., Love Like This, Love Like This, What I Am, Room Under the Stairs",
    },
    {
      _id: "11dafgdag2",
      title: "Notification / Circular 2",
      banner:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Dusk Till Dawn, Icarus Falls, What Makes You Beautiful, Up All Night, Night Changes, Steal My Girl, Four, Kiss You, Take Me Home, Best Song Ever, Midnight Memories, Magic, A Whole New World, Aladdin, Perfect, Story of My Life, You & I, I Don’t Wanna Live Forever, Fifty Shades Darker: Original Motion Picture Soundtrack, Right Now, Midnight Memories, Olivia, Made in the A.M., One Thing, Up All Night, PILLOWTALK, Drag Me Down, Made in the A.M., Live While We're Young, Take Me Home, They Don't Know About Us, Take Me Home, 18, Four, Stockholm Syndrome, Four, Little Things, Take Me Home, Strong, Midnight Memories, You Don't Know You're Beautiful, One Way or Another, Midnight Memories, Let Me, Icarus Falls, History, No Control, Four, Still the One, Take Me Home, Walking in the Wind, Made in the A.M., Love Like This, Love Like This, What I Am, Room Under the Stairs",
    },
    {
      _id: "11dafgdag3",
      title: "Notification / Circular 3",
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
    <div>
      <Toaster />

      <div className="p-10 ">
        <div className="text-2xl">Notification / Circulars</div>
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 ">
          <Link
            to="/consultant/notifications-circulars/add"
            className="bg-blue-600 rounded-md text-white px-3 py-1 font-semibold "
          >
            Add
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {isLoading && (
            <>
              <Skeleton animation="wave" height={50} />
              <Skeleton animation="wave" height={50} />
              <Skeleton animation="wave" height={50} />
              <Skeleton animation="wave" height={50} />
            </>
          )}
          {data && (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr
                    className="bg-transparent border-b   hover:bg-gray-50 "
                    key={item?._id}
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <div className="ps-3">{idx + 1}</div>
                    </th>
                    <td className="px-6 py-4">{item.title}</td>

                    <td className="px-6 py-4 text-center flex gap-4 justify-center">
                      <Link
                        to={`/consultant/notifications-circulars/${item?._id}`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        className="font-medium text-red-600  hover:underline"
                        onClick={() => {
                          deleteItem(item);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* {!isLoading && data && (
          <div className="flex flex-row justify-center w-full mt-10">
            <StyledPagination
              count={totalPages}
              page={Number(page)}
              color="primary"
              onChange={handlePagination}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default QuotationInvoiceList;
