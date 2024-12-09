// ------------------------------------------------Imports--------------------------------------------------
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateConsultant, updateUser } from "../../../features/actions/Auth/userActions";
import { useSelector } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";

// ---------------------------------------------------------------------------------------------------------

const UpdateUser = () => {
  // ------------------------------------------------States--------------------------------------------------

  const { loggedInUserData } = useSelector((state) => state.auth);
  // ---------------------------------------------------------------------------------------------------------
  // ------------------------------------------------Hooks--------------------------------------------------
  const {state:userData} = useLocation();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

  const dispatch = useDispatch();

  const [passDisabled, setPassDisabled] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isUserLoading } = useSelector((state) => state.user);

  // ---------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Functions--------------------------------------------------

  const saveHandler = (data) => {
    if(userData?.pageFor==="Employees"){
dispatch(updateUser({payload:data,userId: userData?._id} ))
    }
    else
   { dispatch(updateConsultant({ payload: data, userId: userData?._id }));}
  };
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffects--------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="p-8 rounded border border-gray-200">
 {  loggedInUserData.role == "0" && userData?.pageFor === "Employees"  ? <h1 class="font-medium text-3xl">Change Employee Password </h1>:
  <h1 class="font-medium text-3xl">Change Consultant Password </h1>
 }
    
        <form onSubmit={handleSubmit(saveHandler)}>
          <div class="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                for="name"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full opacity-50 cursor-not-allowed"
                placeholder="Enter your Full Name"
                disabled={true}
                defaultValue={userData?.fullName || "N/A"}
              />
            </div>

            <div>
              <label
                for="job"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="job"
                id="job"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full opacity-50 cursor-not-allowed"
                placeholder="Enter Email"
                disabled={true}
                defaultValue={userData?.email || "N/A"}
                value={userData?.email}
              />
            </div>
            <div>
              <label
                for="brithday"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Password
              </label>
              <div className="w-[full]  flex gap-2 ">
              <div className="relative">
              <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="brithday"
                  id="brithday"
                  className={`bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-[80%] ${
                    passDisabled ? "opacity-50" : "opacity-100"
                  }`}
                  placeholder="Password"
                  {...(!passDisabled &&
                    register("password", {
                      required: true,
                    }))}
                  disabled={passDisabled ? true : false}
                />
              <span
                className="absolute inset-y-2  right-0 pr-14  cursor-pointer "
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash /> }
              </span></div>  
           
                <button
                  type="button"
                  onClick={() => setPassDisabled(false)}
                  className="w-[20%] border border-gray-500 rounded-2xl text-sm text-red-500"
                >
                  Change Password
                </button>
            
              </div>
              {errors.password && (
                <p className="text-red-500">
                  {errors.password.message || "Password is a required field"}
                </p>
              )}
            </div>
     
          </div>
          <div class="space-x-4 mt-8">
            {isUserLoading ? (
              Array(2)
                .fill(2)
                .map(() => {
                  return (
                    <button
                      type="submit"
                      class="py-2 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-[100px] inline-flex justify-center"
                    >
                      <CircleLoader />
                    </button>
                  );
                })
            ) : (
              <>
                <button
                  type="submit"
                  class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
