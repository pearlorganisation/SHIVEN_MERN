import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, Stack, Modal, Box, Button, Tooltip } from "@mui/material";
import {
  getConsultants,
  updateConsultantStatus,
} from "../../../features/actions/Auth/userActions";

// ------------------------------------------------------------------------------------------------------------

export const ViewConsultants = () => {
  const { consultants } = useSelector((state) => state.user);

  // -----------------------------------------------------States---------------------------------------------
  const [openModal, setOpenModal] = useState(false);
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);
  // ---------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------Hooks---------------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ---------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------Functions---------------------------------------------
  const handleOpenModal = (id) => {
    setSelectedConsultantId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedConsultantId(null);
  };

  const handleConfirmVerify = () => {
    if (selectedConsultantId) {
      dispatch(updateConsultantStatus(selectedConsultantId));
      handleCloseModal(); // Close modal after confirming
    }
  };
  // ---------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    dispatch(getConsultants());
  }, [dispatch]);
  // ---------------------------------------------------------------------------------------------------------

  return (
    <div className="userContainer p-10 min-h-screen">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Consultant Account Approval
        </h4>
      </div>

      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Services</th>
              <th className="py-3 px-6">Razorpay Payment Id</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {false ? (
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
              Array.isArray(consultants) &&
              consultants.length > 0 &&
              consultants.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap max-w-56 truncate">
                    <Tooltip title={item?.email} arrow>
                      <span className="truncate cursor-pointer">
                        {item?.email}
                      </span>
                    </Tooltip>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56">
                    {item?.isVerified ? "Verified" : "Not Verified"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56">
                    {item?.servicePlan && item?.servicePlan.length > 0 ? (
                      <div className="flex items-center space-x-1">
                        {item.servicePlan.slice(0, 2).map((planObj, i) => (
                          <Tooltip key={i} title={planObj.planName} arrow>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs whitespace-nowrap">
                              {planObj.planName}
                            </span>
                          </Tooltip>
                        ))}
                        {item.servicePlan.length > 2 && (
                          <Tooltip
                            title={item.servicePlan
                              .slice(2)
                              .map((p) => p.planName)
                              .join(", ")}
                            arrow
                          >
                            <span className="text-gray-500 ml-1 cursor-pointer text-xs">
                              +{item.servicePlan.length - 2} more
                            </span>
                          </Tooltip>
                        )}
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56">
                    {item?.razorpay_payment_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56">
                    <div className="flex gap-5">
                      <button
                        onClick={() => handleOpenModal(item?._id)}
                        disabled={item?.isVerified}
                        className={`underline text-blue-600 ${
                          item?.isVerified ? "cursor-not-allowed" : ""
                        } `}
                      >
                        Verify
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Confirming Verification */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          className="p-6 bg-white rounded-lg shadow-lg mx-auto mt-20"
          style={{ maxWidth: 400 }}
        >
          <h4 className="font-bold text-lg mb-4">Confirm Verification</h4>
          <p>Are you sure you want to verify this consultant?</p>
          <div className="flex justify-end mt-4">
            <Button onClick={handleCloseModal} className="mr-2">
              Cancel
            </Button>
            <Button
              onClick={handleConfirmVerify}
              color="primary"
              variant="contained"
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
