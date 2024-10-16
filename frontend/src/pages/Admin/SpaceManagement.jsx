import { Modal, Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { CircleLoader } from "react-spinners";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
// import { instance } from "../../services/axiosInterceptor";

// const StyledPagination = styled(Pagination)(({ theme }) => ({
//   "& .MuiPaginationItem-root": {
//     color: "black",
//   },
// }));

const SpaceManagment = () => {
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
  const {
    register,
    onSubmit,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      Name: "j@j.com",
      SpaceAlloted: "1024MB",
    },
    {
      _id: "112",
      Name: "j@j.com",
      SpaceAlloted: "1044MB",
    },
    {
      _id: "113",
      Name: "j@j.com",
      SpaceAlloted: "1024MB",
    },
    {
      _id: "114",
      Name: "j@j.com",
      SpaceAlloted: "2044MB",
    },
  ];

  const sampleData2 = [
    {
      _id: "111",
      Name: "j@j.com",
      SpaceAlloted: "1024MB",
    },
    {
      _id: "112",
      Name: "j@j.com",
      SpaceAlloted: "5024MB",
    },
    {
      _id: "113",
      from: "j@j.com",
      Name: "j@j.com",
      SpaceAlloted: "1034MB",
    },
    {
      _id: "114",
      Name: "j@j.com",
      SpaceAlloted: "1024MB",
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
        <div className="text-2xl">Space Management</div>
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
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className=" px-6 py-3 flex flex-start">
                      Space Alloted
                    </th>
                    <th scope="col" className="text-center px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr
                      className="bg-transparent border-b hover:bg-gray-50"
                      key={item?._id}
                    >
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 text-gray-900 whitespace-nowrap text-center"
                      >
                        <div className="ps-3">{idx + 1}</div>
                      </th>
                      <td className="px-6 py-4">{item?.Name}</td>
                      <td className="px-6 py-4">{item?.SpaceAlloted}</td>
                      <td className="px-6 py-4 text-center flex gap-2 justify-center">
                        <button
                          type="button"
                          className="p-1 px-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                          onClick={() => handleOpen(item)}
                        >
                          Edit
                        </button>
                        {/* <button
                          type="button"
                          className="p-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300"
                        >
                          Delete
                        </button> */}
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
              <div className="flex flex-col gap-4 justify-center items-center">
                {/* Name Field */}
                <div className="grid grid-cols-2 w-full">
                  <label htmlFor="Name" className="font-semibold">
                    Name:
                  </label>
                  <div className="flex flex-col">
                    <input
                      id="Name"
                      type="text"
                      defaultValue={selectedItem?.Name}
                      className={`border rounded p-2 w-full ${
                        errors.Name ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("Name", {
                        required: "Name is required",
                      })}
                      placeholder="Enter your name"
                    />
                    {errors && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Space Alloted Field */}
                <div className="grid grid-cols-2 w-full">
                  <label htmlFor="SpaceAlloted" className="font-semibold">
                    Space Alloted:
                  </label>
                  <div className="flex flex-col">
                    <input
                      id="SpaceAlloted"
                      defaultValue={selectedItem?.SpaceAlloted}
                      type=""
                      className={`border rounded p-2 w-full ${
                        errors?.SpaceAlloted
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...register("SpaceAlloted", {
                        required: "Space Alloted is required",
                        min: {
                          value: 1,
                          message: "Space Alloted must be at least 1",
                        },
                        max: {
                          value: 1000,
                          message: "Space Alloted cannot exceed 1000",
                        },
                      })}
                      placeholder="Enter space alloted"
                    />
                    {errors?.SpaceAlloted && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors?.SpaceAlloted?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-[#68bcf3] rounded p-2 text-white hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SpaceManagment;
