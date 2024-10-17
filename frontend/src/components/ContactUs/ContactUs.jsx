import { Modal, Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import { CircleLoader } from "react-spinners";
import { Toaster, toast } from "sonner";
// import { instance } from "../../services/axiosInterceptor";

// const StyledPagination = styled(Pagination)(({ theme }) => ({
//   "& .MuiPaginationItem-root": {
//     color: "black",
//   },
// }));

const ContactUs = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setSelectedItem(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  //   const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  //   const [page, setPage] = useState(searchParams.get("page") || 1);
  //   const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

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
      _id: "111",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 1",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "112",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 2",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "113",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 3",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "114",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 4",
      content: "this is just a sample mail that was sent",
    },
  ];

  const sampleData2 = [
    {
      _id: "111",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 1",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "112",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 2",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "113",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 3",
      content: "this is just a sample mail that was sent",
    },
    {
      _id: "114",
      from: "j@j.com",
      to: "x@x.com",
      subject: "mail 4",
      content: "this is just a sample mail that was sent",
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
        <div className="text-2xl">Contact Us:</div>
        <div className="mt-10">
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
                      From
                    </th>
                    <th scope="col" className="text-center px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="text-center px-6 py-3">
                      Subject
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
                      <td className="px-6 py-4">{item?.from}</td>
                      <td className="px-6 py-4">{item?.to}</td>

                      <td className="px-6 py-4">{item?.subject}</td>

                      <td className="px-6 py-4 text-center flex gap-2 justify-center">
                        <button
                          type="button"
                          className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                          onClick={() => handleOpen(item)}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="p-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300"
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="relative w-[95vw] md:w-[40vw] bg-white shadow-[0_0_0_1px#ffdd00] rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">From:</div>
                <div className="">{selectedItem?.from}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">To:</div>
                <div className="">{selectedItem?.to}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Subject:</div>
                <div className="">{selectedItem?.subject}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Message:</div>
                <div className="">{selectedItem?.content}</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;
