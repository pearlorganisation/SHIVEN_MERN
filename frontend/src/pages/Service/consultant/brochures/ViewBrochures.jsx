import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Skeleton } from '@mui/material';
import { getAllTemplates } from '../../../../features/actions/brochure';
import BrochureModal from '../../../../components/Modal/BrochureModal';
import EditBrochure from '../../../../components/Modal/EditBrochure';
import { clearIsCreated } from '../../../../features/slices/brochure';
import { MdDelete } from "react-icons/md";
import Delete from '../../../../components/delete';

const ViewBrochures = () => {
  const dispatch = useDispatch();
  const { templateData, isLoading } = useSelector((state) => state.brochure);
  const { loggedInUserData } = useSelector((state) => state.auth);

  const [showViewModal, setShowViewModal] = useState(false);
  const [showViewModal2, setShowViewModal2] = useState(false);
  const [viewData2, setViewData2] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleViewModal = (itemData) => {
    setShowViewModal(true);
  };

  const handleViewModal2 = (itemData) => {
    setShowViewModal2(true);
    setViewData2(itemData);
  };

  const handleDeleteConfirm = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  const handleDelete = () => {
    dispatch(clearIsCreated(deleteId));
    setDeleteModal(false);
  };

  useEffect(() => {
    dispatch(getAllTemplates());
    dispatch(clearIsCreated());
  }, [dispatch]);

  return (
    <div className="userContainer p-10">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Brochures Templates
        </h4>
        {loggedInUserData.role === "0" && (
          <div className="createEmployeeBtn flex justify-end p-4">
            <button
              className="p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
              onClick={() => handleViewModal()}
            >
              Add New Brochures Template
            </button>
          </div>
        )}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b" />
          <tbody className="text-gray-600 divide-y">
            {isLoading ? (
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
            ) : (
              Array.isArray(templateData) &&
              templateData.length > 0 &&
              templateData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group inline-block m-4 bg-white"
                >
                  {/* Gallery Image */}
                  <img
                    src={item?.template?.secure_url}
                    className="rounded-lg w-auto max-w-[450px] h-[300px] object-cover"
                    onClick={() => handleViewModal2(item?.template?.secure_url)}
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleDeleteConfirm(item?._id)}
                    >
                      <MdDelete
                        size={40}
                        className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showViewModal && <BrochureModal setModal={setShowViewModal} />}
      {showViewModal2 && (
        <EditBrochure setModal={setShowViewModal2} viewData={viewData2} />
      )}
      {deleteModal && (
        <Delete
          setModal={setDeleteModal}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default ViewBrochures;
