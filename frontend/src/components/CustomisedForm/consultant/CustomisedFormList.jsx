import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  import {  useDispatch, useSelector } from "react-redux";
import { getAllCustomisedForm } from "../../../features/actions/customisedForm";


const CustomisedFormList = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch()
  const { loggedInUserData } = useSelector((state) => state.auth);
  const { isLoading, customisedFormData } = useSelector((state) => state.customisedForm);


 

  useEffect(() => {
dispatch(getAllCustomisedForm())
  }, []);

  return (
    <div>

      <div className="p-10 ">
        <div className="text-2xl ">Customised Forms</div>
      <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-8 ">
        { loggedInUserData.role === "0" &&   <Link
            to="/admin/customised-forms/add"
            className="bg-blue-600 rounded-md text-white px-3 py-1 font-semibold "
          >
            Add New Form
          </Link>}
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
          {customisedFormData && Array.isArray(customisedFormData)  && (
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
                { loggedInUserData.role === "0" &&   <th scope="col" className="text-center px-6 py-3">
                    Actions
                  </th>}
                </tr>
              </thead>
              <tbody>
                {customisedFormData.map((item, idx) => (
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
                          item?.url?.length > 0 ? item?.url : item?.pdf?.secure_url
                        }`}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-600 transition duration-300"
                      >
                        {item?.url?.length > 0
                          ? `Go to ${item?.url}`
                          : "Click to open Attached File"}
                      </a>
                    </td>

                {  loggedInUserData.role === "0" &&    <td className="px-6 py-4 text-center flex gap-4 justify-center">
                      <Link
                        to={`/admin/customised-forms/${item?._id}`}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        className="font-medium text-red-600  hover:underline"
                        onClick={() => {
                          deleteItem(item);
                        }}
                      >
                        Delete
                      </button>
                    </td>}
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
      </div>
    </div>
  );
};

export default CustomisedFormList;
