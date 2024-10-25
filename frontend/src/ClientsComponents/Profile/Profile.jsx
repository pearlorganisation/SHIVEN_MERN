import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Skeleton } from "@mui/material";
import ViewProfileModal from "../../components/Modal/ViewProfileModal";

const Profile = () => {
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
      address: "High streets",
    },
    {
      firstName: "Kailyn",
      lastName: "Doe",
      email: "x@gmail.com",
      mobile: "9999999999",
      address: "High streets",
    },
    {
      firstName: "John Jr",
      lastName: "Doe",
      email: "x@gmail.com",
      mobile: "9999999999",
      address: "High streets",
    },
  ];

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          All Profiles
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/profile/createProfile");
            }}
          >
            Add New Profile
          </button>
        </div>
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">First Name</th>
              <th className="py-3 px-6">Last Name </th>
              <th className="py-3 px-6">E-mail</th>
              <th className="py-3 px-6">Mobile 1</th>

              <th className="py-3 px-6">Address</th>

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

                    <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                      {item?.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                      {item?.mobile}
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                      {item?.address}
                    </td>

                    <td className=" whitespace-nowrap">
                      <button
                        onClick={() => {
                          handleViewModal(item);
                        }}
                        className="py-2 leading-none px-3 font-semibold text-yellow-500 hover:text-yellow-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        View
                      </button>
                      <a
                        // onClick={() => {
                        //   navigate(`/updateDessert/${item?._id}`, { state: item  });
                        // }}
                        className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        // onClick={() => {
                        //   handleModal(item?._id);
                        // }}
                        className="py-2 leading-none px-3 font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              // )
            }
          </tbody>
        </table>
      </div>
      {showViewModal && (
        <ViewProfileModal setModal={setShowViewModal} viewData={viewData} />
      )}
    </div>
  );
};

export default Profile;
