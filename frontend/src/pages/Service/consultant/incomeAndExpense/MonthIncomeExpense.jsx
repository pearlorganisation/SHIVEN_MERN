import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Skeleton } from "@mui/material";
import ViewModalWholeLife from "../../../ServicePlans/wholeLifeInsurance/ViewModalWholeLife";


const MonthIncomeExpense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicePlanData= [
    {
    year : "28 October , 2024",
    expense : 5000,
    income: 15000
  },
    {
    year : "27 October, 2024",
    expense : 5000,
    income: 15000
  },

  {
  year : "26 October, 2024",
  expense : 10000,
  income: 50000
},
  {
  year : "25 October, 2024",
  expense :6000,
  income: 40000
},

]
  
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewData, setViewData] = useState();

    const handleViewModal=(itemData)=>{
        setShowViewModal(true)
        setViewData(itemData)
      }


  return (
    <div className="userContainer p-10 ">

        <div className="createEmployeeBtn flex justify-between ">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Daily Income and Expense
        </h4>

        </div>
 
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Expense</th>
              <th className="py-3 px-6">Income</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {false ? (
              <tr>
                <td colSpan="7" className="text-center px-6 py-8">
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
              Array.isArray(servicePlanData) &&
              servicePlanData.length > 0 &&
              servicePlanData?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                  {item.year}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                  ₹  {item.expense}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                   ₹  {item.income}
                  </td>
    

                  <td className=" whitespace-nowrap">

                    <button
                      onClick={() => {
                      navigate(`/`)
                      }}
                      className="py-2 leading-none px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                     View Full Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showViewModal  && (
        <ViewModalWholeLife setModal={setShowViewModal} viewData={viewData} />
      )}
    </div>
  );
};

export default MonthIncomeExpense;
