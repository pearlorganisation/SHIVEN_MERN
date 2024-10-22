import { Modal, Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { Toaster, toast } from "sonner";

const EnquiryLeadsManagement = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setSelectedItem(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const sampleData = [
    {
      _id: "101",
      sourceOfLead: "Google Ads",
      typeOfLead: "New Business",
      typeOfEnquiry: "Product Inquiry",
      typeOfJob: "Installation",
      projectLocation: "New York, NY",
      clientName: "TechCorp",
      bidsOpen: "2024-10-01",
      bidCloses: "2024-10-15",
      action: "In Progress",
      modalData: {
        categoryOfLead: "Technology",
        leadQuality: "High",
        mainCategory: "Hardware",
        subCategory: "Networking Equipment",
        projectDetails: "Setting up network infrastructure for a new office",
        reasonForNotQuoting: "",
        clientWebsite: "https://techcorp.com",
        clientNumber: "+1-555-1234",
        clientEmailId: "contact@techcorp.com"
      }
    },
    // Other items omitted for brevity
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
        <div className="text-2xl">Enquiry / Leads Management:</div>
        <div className="mt-10">
          <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 ">
            <Link
              to={"/enquiry-leads-management/add"}
              className="rounded-md text-white p-1 bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              Add
            </Link>
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
                    <th scope="col" className="px-6 py-3">S.No</th>
                    <th scope="col" className="px-6 py-3">Source of Lead</th>
                    <th scope="col" className="px-6 py-3">Type of Lead</th>
                    <th scope="col" className="px-6 py-3">Type of Enquiry</th>
                    <th scope="col" className="px-6 py-3">Project Location</th>
                    <th scope="col" className="px-6 py-3">Client Name</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr
                      className="bg-transparent border-b hover:bg-gray-50"
                      key={item?._id}
                    >
                      <th scope="row" className="px-6 py-4">{idx + 1}</th>
                      <td className="px-6 py-4">{item?.sourceOfLead}</td>
                      <td className="px-6 py-4">{item?.typeOfLead}</td>
                      <td className="px-6 py-4">{item?.typeOfEnquiry}</td>
                      <td className="px-6 py-4">{item?.projectLocation}</td>
                      <td className="px-6 py-4">{item?.clientName}</td>
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="relative w-[95vw] md:w-[40vw] bg-white shadow-[0_0_0_1px#ffdd00] rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Source of Lead:</div>
                <div>{selectedItem?.sourceOfLead}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Type of Lead:</div>
                <div>{selectedItem?.typeOfLead}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Type of Enquiry:</div>
                <div>{selectedItem?.typeOfEnquiry}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Client Name:</div>
                <div>{selectedItem?.clientName}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Project Location:</div>
                <div>{selectedItem?.projectLocation}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Bids Open:</div>
                <div>{selectedItem?.bidsOpen}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Bids Close:</div>
                <div>{selectedItem?.bidCloses}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Category of Lead:</div>
                <div>{selectedItem?.modalData?.categoryOfLead}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Lead Quality:</div>
                <div>{selectedItem?.modalData?.leadQuality}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Main Category:</div>
                <div>{selectedItem?.modalData?.mainCategory}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Sub Category:</div>
                <div>{selectedItem?.modalData?.subCategory}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Project Details:</div>
                <div>{selectedItem?.modalData?.projectDetails}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Client Website:</div>
                <div>{selectedItem?.modalData?.clientWebsite}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Client Email:</div>
                <div>{selectedItem?.modalData?.clientEmailId}</div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <div className="font-semibold">Client Number:</div>
                <div>{selectedItem?.modalData?.clientNumber}</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EnquiryLeadsManagement;
