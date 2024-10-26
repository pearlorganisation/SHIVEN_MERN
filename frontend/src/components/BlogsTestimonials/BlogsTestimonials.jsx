import { Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import BlogsModal from "./BlogsModal";
// import { instance } from "../../services/axiosInterceptor";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "black",
  },
}));


const BlogsTestimonials = () => {
  const [data, setData] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState();
  
  const handleViewModal = (itemData) => {
    setShowViewModal(true);
    setViewData(itemData);
  };
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
      title: "blog 1",
    },
    {
      title: "blog 2",
    },
    {
      title: "blog 3",
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
        <div className="text-2xl">Blogs & Testimonials</div>
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 ">
     
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
                    <td className="px-6 py-4">{item.title}</td>

                    <td className="px-6 py-4 text-center flex gap-4 justify-center">
                   
<select name="cars" id="cars" className="px-6 py-2 rounded-md" >
  <option  >Choose Status</option>
  <option value="volvo">Approved</option>
  <option value="saab">Rejected</option>

</select>
                      <button
                        className="font-medium text-green-600  hover:underline"
                        onClick={() => {
                          handleViewModal(item)
                        }}
                      >
                        View
                      </button>
                      <button
                        className="font-medium text-red-600  hover:underline"
                        // onClick={() => {
                        //   deleteItem(item);
                        // }}
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
            {showViewModal && (
        <BlogsModal setModal={setShowViewModal} viewData={viewData} />
      )}
      </div>
    </div>
  );
};

export default BlogsTestimonials;
