// -------------------------------------------------Imports---------------------------------------------
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConsultants } from "../../../features/actions/Auth/userActions";
import { useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
// -----------------------------------------------------------------------------------------------------

const ConsultantTable = ({name}) => {
  // -------------------------------------------------States---------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks---------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { usersData } = useSelector((state) => state?.user);

  
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------
  const editHandler = (userData) => {
    navigate("/users/update-user", { state: { ...userData,pageFor:name } });
  };
  //

  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    if(name === "Consultants"){
     dispatch(getConsultants({key:"isVerified",value:true}))
    }
    else if (name === "Employees"){
    }
  }, []);

  // -----------------------------------------------------------------------------------------------------
  const actionBtnIconSize = 25;
  const actionButtons = [
    {
      icon: () => {
        return <CiEdit style={{ color: "blue" }} size={actionBtnIconSize} />;
      },
      actionButtonClickHandler: (data) => {
        editHandler(data);
      },
    }
  ];
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
              {name !== "Employees" && name !== "Consultants" && (
                <th scope="col" class="px-6 py-3">
                  Customers
                </th>
              )}
              <th scope="col" colSpan={2} class="text-center px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(usersData?.users) &&
              usersData?.users.length > 0 &&
              usersData?.users.map((user) => {
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
                      {  name !== "Employees"  && (
                        <td class=" py-4">
                          <Link
                            to="/consultant-filesManagement"
                            className="hover:bg-blue-500 bg-blue-600 rounded-md py-1 text-white px-2"
                          >
                            View Customers
                          </Link>
                        </td>
                      )}
                      <td class="py-4 flex justify-center ">
                        {actionButtons.map((btn) => {
                          return (
                            <button
                            className=" hover:bg-green-600 bg-green-700 rounded-md py-1 text-white px-2"
                              onClick={() => {
                                btn.actionButtonClickHandler(user);
                              }}
                            >
                              Change Password
                            </button>
                          );
                        })}
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

export default memo(ConsultantTable);
