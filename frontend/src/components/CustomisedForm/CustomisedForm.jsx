import { Modal, Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { Toaster, toast } from "sonner";
// import { instance } from "../../services/axiosInterceptor";

// const StyledPagination = styled(Pagination)(({ theme }) => ({
//   "& .MuiPaginationItem-root": {
//     color: "black",
//   },
// }));

const CustomisedForms = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [data, setData] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setSelectedForm(data);
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
      name: "Form 1",
      url: "",
      file: "/sample.pdf",
    },
    {
      _id: "112",
      name: "Form 2",
      url: "",
      file: "/sample.pdf",
    },
    {
      _id: "113",
      name: "Form 3",
      url: "https://google.com",
      file: "",
    },
    {
      _id: "114",
      name: "Form 4",
      url: "https://facebook.com",
      file: "",
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
        <div className="text-2xl">Customised Forms</div>
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 "></div>
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
                    Name
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Link/File
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
                    <td className="px-6 py-4">{item?.name}</td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={`${
                          item?.url?.length > 0 ? item?.url : item?.file
                        }`}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-600 transition duration-300"
                      >
                        {item?.url?.length > 0
                          ? `Go to ${item?.url}`
                          : "Click to open Attached File"}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        type="button"
                        className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                        onClick={() => handleOpen(item)}
                      >
                        Submit Form
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="relative w-[95vw] md:w-[40vw] bg-white shadow-[0_0_0_1px#ffdd00] rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
            <form>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="file"
                  placeholder="Upload File"
                
                //   {...register("file", {
                //     required: {
                //       value: true,
                //       message: "File is a required field",
                //     },
                //   })}
                />
                {/* {errors.file && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.file?.message || "File is a required field"}
                  </p>
                )} */}
              </div>
              <button
                className="mx-auto mt-5 tracking-wide text-base font-semibold bg-green-400 text-black w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type="submit"
                disabled={isSubmitLoading}
              >
                {isLoading ? (
                  <CircleLoader />
                ) : (
                  <span className="ml-3">Submit</span>
                )}
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CustomisedForms;
