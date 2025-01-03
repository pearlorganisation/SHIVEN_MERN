import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Skeleton } from "@mui/material";
import ViewProfileModal from "../../components/Modal/ViewProfileModal";
import { deleteCustomerProfile, getParticularCustomerProfile } from "../../features/actions/customerProfile";
import Delete from "../../components/delete";

const FilesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {state:idState} = useLocation();

    const { customerProfileData, isLoading,isDeleted } = useSelector(
      (state) => state.customerProfile
    );
    const { loggedInUserData } = useSelector((state) => state.auth);


  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [viewData, setViewData] = useState();
  const [id, setId] = useState();

  const handleViewModal = (itemData) => {
    setShowViewModal(true);
    setViewData(itemData);
  };
  const handleDeleteModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  };
  const handleDelete = () => {
    dispatch(deleteCustomerProfile(id));
    setShowDeleteModal(false);
    setId('');
  };

    useEffect(() => {
      if(loggedInUserData?.role === "2")
     { dispatch(getParticularCustomerProfile(loggedInUserData?._id))}
      else{
        dispatch(getParticularCustomerProfile(idState))
      }
    }, [isDeleted]);


  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
        All Profiles Documents
        </h4>

      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Full Name</th>
              <th className="py-3 px-6">E-mail</th>
              <th className="py-3 px-6">Mobile 1</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {
              isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center px-6 py-8">
                    <Stack spacing={4}>
                      <Skeleton variant="rounded" height={30} />
                      <Skeleton variant="rounded" height={25} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                    </Stack>
                  </td>
                </tr>
              ) :
               (
              Array.isArray(customerProfileData) &&
              customerProfileData.length > 0 &&
              customerProfileData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                      {item?.mobile1}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={"/files-folders"}
                        className="py-2 bg-blue-600 leading-none px-3 font-semibold text-white hover:text-yellow-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Files & Folders
                      </Link>

                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
      {showViewModal && (
        <ViewProfileModal setModal={setShowViewModal} viewData={viewData} />
      )}
       {showDeleteModal && (
        <Delete setModal={setShowDeleteModal} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default FilesPage;
