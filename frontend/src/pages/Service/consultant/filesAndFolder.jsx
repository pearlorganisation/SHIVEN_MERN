import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Skeleton } from "@mui/material";

const filesAndFolder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { servicePlanData, isLoading } = useSelector(
  //     (state) => state.servicePlan
  //   );

  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState();

  const handleViewModal = (itemData) => {
    setShowViewModal(true);
    setViewData(itemData);
  };

  //   useEffect(() => {
  //     dispatch(getAllServicePlans());
  //   }, []);

  const servicePlanData = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "x@gmail.com",
      mobile: "9999999999",
      mobile2: "8888888888",
      address: "High streets",
    },
    {
      firstName: "Kailyn",
      lastName: "Doe",
      email: "x@gmail.com",
      mobile: "9999999999",
      mobile2: "8888888888",
      address: "High streets",
    },
    {
      firstName: "John Jr",
      lastName: "Doe",
      email: "x@gmail.com",
      mobile: "9999999999",
      mobile2: "8888888888",
      address: "High streets",
    },
  ];

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          All Client Documents
        </h4>
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">First Name</th>
              <th className="py-3 px-6">Last Name </th>
              <th className="py-3 px-6">Address</th>
              <th className="py-3 px-6">E-Mail</th>
              <th className="py-3 px-6">Mobile 1</th>
              <th className="py-3 px-6">Mobile 2</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {
              // true ? (
              //   <tr>
              //     <td colSpan="6" className="text-center px-6 py-8">
              //       <Stack spacing={4}>
              //         <Skeleton variant="rounded" height={30} />
              //         <Skeleton variant="rounded" height={25} />
              //         <Skeleton variant="rounded" height={20} />
              //         <Skeleton variant="rounded" height={20} />
              //         <Skeleton variant="rounded" height={20} />
              //       </Stack>
              //     </td>
              //   </tr>
              // ) :
              //  (
              Array.isArray(servicePlanData) &&
                servicePlanData.length > 0 &&
                servicePlanData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.address}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.mobile}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.mobile2}
                    </td>
                    <td className=" whitespace-nowrap">
                      <a
                        onClick={() => {
                          navigate("/clientFiles");
                        }}
                        className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        View All Profiles
                      </a>
                    </td>
                  </tr>
                ))
              // )
            }
          </tbody>
        </table>
      </div>
      {showViewModal && (
        <ViewDocumentUploads setModal={setShowViewModal} viewData={viewData} />
      )}
    </div>
  );
};

export default filesAndFolder;
