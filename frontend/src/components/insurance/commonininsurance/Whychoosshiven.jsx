import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { MdOutlineCompare } from 'react-icons/md'
import { SiAdguard } from 'react-icons/si'

const Whychoosshiven = () => {
  return (
    
   <>
       <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto py-16 px-4 bg-gray-100 my-20">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Why Choose Shiven
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <MdOutlineCompare size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Intra plan comparison
                </h3>
                <p className="text-gray-600 text-center">
                  Compare for the best pricing and find the right plan for your
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <BiSupport size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Expert Claim support
                </h3>
                <p className="text-gray-600 text-center">
                  Get support during your claim request for a smooth &
                  hassle-free experience.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <SiAdguard size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Additional riders
                </h3>
                <p className="text-gray-600 text-center">
                  To provide extra benefits as add ons, customizing your plan
                  further.
                </p>
              </div>
            </div>
          </div>
  </>
  )
}

export default Whychoosshiven