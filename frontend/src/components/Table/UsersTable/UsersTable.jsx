// -------------------------------------------------Imports---------------------------------------------
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConsultants, getUsers } from "../../../features/actions/Auth/userActions";
import { useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
// -----------------------------------------------------------------------------------------------------
// agar tum yha tk pohoch gye toh best of luck, all credit to pieces of shit here, sbko bolo gand mraye, except mern team
const UsersTable = ({name}) => {
  // -------------------------------------------------States---------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks---------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { usersData } = useSelector((state) => state?.user);
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------
  const editHandler = (userData) => {
    navigate("/users/update-user", { state: { userData } });
  };
  //

  // -----------------------------------------------Functions---------------------------------------------
  const deleteHandler = (userData) => {
    confirm(`Are you sure you want to delete ${userData.userName}?`);
  };
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    if(name === "Consultants"){
     dispatch(getConsultants({key:"isVerified",value:true}))
    }
    else{
    dispatch(getUsers());
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
    },
    {
      icon: () => {
        return (
          <MdDeleteForever style={{ color: "red" }} size={actionBtnIconSize} />
        );
      },
      actionButtonClickHandler: (data) => {
        deleteHandler(data);
      },
    },
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
                      {/* <td class="px-6 py-4">
                        {reverseRoleChecker(user?.role) || "N/A"}
                      </td> */}
                      {  name !== "Employees"  && (
                        <td class="px-6 py-4">
                          <Link
                            to="/consultant-filesManagement"
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                          >
                            View Customers
                          </Link>
                        </td>
                      )}
                      <td class="px-6 py-4 flex justify-center gap-4">
                        {actionButtons.map((btn) => {
                          return (
                            <button
                              onClick={() => {
                                btn.actionButtonClickHandler(user);
                              }}
                            >
                              {btn.icon()}
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

export default memo(UsersTable);
