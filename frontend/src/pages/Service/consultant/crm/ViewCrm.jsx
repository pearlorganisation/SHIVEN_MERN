import { Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import ViewModal from "./ViewModal";
// import { instance } from "../../services/axiosInterceptor";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "black",
  },
}));

const ViewCrm = () => {
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

      const [showViewModal, setShowViewModal] = useState(false);
    const [viewData, setViewData] = useState();

    const handleViewModal = (itemData) => {
      setShowViewModal(true);
      setViewData(itemData);
    };


  const sampleData = [
    {
      _id: "111",
      name: "rex",
      company: "companyNamexyz",
      phone: 9876543210,
      subject: "sample subject",
      industry: "Financial",
    },
    {
      _id: "112",
      name: "rex",
      company: "companyNamexyz",
      phone: 9876543210,
      subject: "sample subject",
      industry: "Financial",
    },

    {
      _id: "113",
      name: "rex",
      company: "companyNamexyz",
      phone: 9876543210,
      subject: "sample subject",
      industry: "Financial",
    },

    {
      _id: "114",
      name: "rex",
      company: "companyNamexyz",
      phone: 9876543210,
      subject: "sample subject",
      industry: "Financial",
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
        <div className="text-2xl">Client Relationship Management</div>
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 ">
          {/* <Link
            to="/consultant/contactManagement/add"
            className="bg-blue-600 rounded-md text-white px-3 py-1 font-semibold "
          >
            Add
          </Link> */}
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
                    Name
                  </th>
                  <th scope="col" className=" px-6 py-3">
                    Name of Company
                  </th>
                  <th scope="col" className=" px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className=" px-6 py-3">
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
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.company}</td>

                    <td className="px-6 py-4">{item.phone}</td>

                    <td className="px-6 py-4">{item.subject}</td>

                    <td className="px-6 py-4 text-center flex gap-4 justify-center">
                      <Link
                         onClick={() => {
                            handleViewModal(item);
                          }}
                        className="font-medium text-green-600  hover:underline"
                      >
                        View Status
                      </Link>
                      <Link
                        to={`/consultant/crm/addStatus`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Add Status
                      </Link>
        
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
              {showViewModal && (
        <ViewModal setModal={setShowViewModal} viewData={viewData} />
      )}
      </div>
    </div>
  );
};

export default ViewCrm;
