import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { changePassword } from '../../features/actions/Auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { resetLoginState } from '../../features/slices/Auth/authSlice';

const NewPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isPasswordChanged}= useSelector((state)=>state.auth)
  const email = location?.state?.email || "";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => {
    dispatch(changePassword({password:data?.password1,email}))
  }

useEffect(() => {
if(isPasswordChanged){
  navigate("/login")
}
}, [isPasswordChanged])

  return (
   <>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0">

      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handleSubmit(onSubmit)}>
            
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input 
                  type="password"
                   name="password" 
                   id="password"
                    placeholder="••••••••"
                    {...register("password1", { required: true })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                     {errors.password1 && <span className='text-red-600'>This field is required</span>}
              </div>
              <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      {...register("password2", { required: true })}
                    id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
                    {errors.password2 && <span className='text-red-600 text-sm'>Please accept the terms and conditions</span>}
              <button type="submit" class="w-full text-white bg-[#4F46E5] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
          </form>
      <div className="text-center pt-4">
              <Link
                to="/login"
                className="font-medium hover:underline text-indigo-600 hover:text-indigo-700"
              >
                Go back to login page
              </Link>
            </div>
      </div>
  </div>
</section>
   </>

  )
}

export default NewPassword