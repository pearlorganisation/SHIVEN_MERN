// -------------------------------------------------Imports---------------------------------------------
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../features/actions/Auth/userActions";
import { useSelector } from "react-redux";
import { reverseRoleChecker } from "../../../utils";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { getInsurances } from "../../../features/actions/Insurance/insuranceActions";
// -----------------------------------------------------------------------------------------------------

const InsurancesTable = () => {
  // -------------------------------------------------States---------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks---------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { insurancesData } = useSelector((state) => state?.insurance);
  // const [userData, setUserData] = useState({});
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions---------------------------------------------
  const editHandler = (userData) => {
    navigate("/users/update-user", { state: { userData } });
  };
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    dispatch(getInsurances());
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
                Insurance Type
              </th>
              <th scope="col" class="px-6 py-3">
                Insurance Description
              </th>
              <th scope="col" class="px-6 py-3">
                Insurance Icon
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(insurancesData?.insurances) &&
              insurancesData?.insurances.length > 0 &&
              insurancesData?.insurances.map((insurance) => {
                return (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4">
                        {insurance?.insuranceType || "N/A"}
                      </td>
                      <td class="px-6 py-4">
                        {insurance?.insuranceDescription || "N/A"}
                      </td>
                      <td class="px-6 py-4">
                        {insurance?.insuranceIcon ? (
                          <img src={insurance?.insuranceIcon} className={`w-[80px] h-[80px]`}/>
                        ) : (
                          "ICON"
                        )}
                      </td>
                      <td class="px-6 py-4">
                        {actionButtons.map((btn) => {
                          return (
                            <button
                              onClick={() => {
                                btn.actionButtonClickHandler(insurance);
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

export default memo(InsurancesTable);
