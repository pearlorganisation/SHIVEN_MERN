// -------------------------------------------------Imports---------------------------------------------
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../features/actions/Auth/userActions";
import { useSelector } from "react-redux";
import { reverseRoleChecker } from "../../../utils";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------------------------------------------------

const UsersTable = () => {
  // -------------------------------------------------States---------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks---------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { usersData } = useSelector((state) => state?.user);
  // const [userData, setUserData] = useState({});
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------
  const editHandler = (userData) => {
    navigate("/users/update-user", { state: { userData } });
  };
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // -----------------------------------------------------------------------------------------------------
  const actionBtnIconSize = 25;
  const actionButtons = [
    {
      icon: () => {
        return <CiEdit style={{ color: "black" }} size={actionBtnIconSize} />;
      },
      actionButtonClickHandler: (data) => {
        editHandler(data);
      },
    },
  ];
  // -----------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                User Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user?.fullName || "N/A"}
                      </th>
                      <td class="px-6 py-4">{user?.userName || "N/A"}</td>
                      <td class="px-6 py-4">{user?.email || "N/A"}</td>
                      <td class="px-6 py-4">
                        {reverseRoleChecker(user?.role) || "N/A"}
                      </td>
                      <td class="px-6 py-4">
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
