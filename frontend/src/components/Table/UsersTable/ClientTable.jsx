// -------------------------------------------------Imports---------------------------------------------
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  getParticularConsultantCustomer } from "../../../features/actions/Auth/customer";
// -----------------------------------------------------------------------------------------------------

const ClientTable = () => {
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state?.customer);
  const { loggedInUserData } = useSelector((state) => state.auth);

  useEffect(() => {
     dispatch(getParticularConsultantCustomer(loggedInUserData?._id))
  }, []);


  // -----------------------------------------------------------------------------------------------------
  return (
    <div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Created Date
              </th>
              <th scope="col" class=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customerData) &&
              customerData.length > 0 &&
              customerData.map((user) => {
                const createdAtDate = user?.createdAt ? new Date(user?.createdAt) : null;
                const formattedDate = createdAtDate ? createdAtDate.toISOString().split('T')[0] : '';
                return (
                  <>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {user?.fullName || "No name"}
                      </th>
           
                      <td class="px-6 py-4">{user?.email || "N/A"}</td>
                      <td class="px-6 py-4">
                        {formattedDate}
                      </td>
                 
                        <td class=" py-4">
                          <Link
                            to="/consultant-filesManagement"
                            className="hover:bg-blue-500 bg-blue-600 rounded-md py-1 text-white px-2"
                          >
                            View Customers
                          </Link>
                        </td>
          

                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(ClientTable);
