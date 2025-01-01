import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTemplate, getAllTemplates } from '../../features/actions/brochure';

export default function BrochureModal ({setModal}) {
  
  const dispatch = useDispatch();
  const {isCreated,isLoading} = useSelector((state)=>state.brochure);

  const handleFileChange = (e)=>{
    try {
      if (e.target.files) {
        const { files } = e.target;
        const file = files[0];
        
        // Create a new FormData object
        const formData = new FormData();
        
        // Append the file to the FormData (binary data)
        formData.append("template", file);
        
        // You can now send the formData with a POST request
        dispatch(addTemplate(formData));
  
      }
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  }

  useEffect(()=>{
  if(isCreated){
    setModal(false)
    dispatch(getAllTemplates())
  }
  },[isCreated])

  


    return (
    
        <div
        className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
        aria-labelledby="header-3a content-3a"
        aria-modal="true"
        tabindex="-1"
        role="dialog"
      >
        {/*    <!-- Modal --> */}
        <div
          className="flex justify-center rounded bg-white py-6 shadow-xl "
          id="modal"
          role="document"
        >
             
          <div className='flex flex-col justify-center gap-5'>
    
 <div className='px-8 space-y-5'> 
   <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
               
                   <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                {isLoading ?<div  className="font-medium text-indigo-600">Loading...</div> : <p className="mt-3 text-gray-700 max-w-xs mx-auto"> <span  className="font-medium text-indigo-600">Select a file</span> or drag and drop a file here</p>}
                </label>
                <input disabled={isLoading?true:false} id="file" accept=".png, .jpg, .jpeg, .webp" type="file" className="hidden" onChange={handleFileChange
                }/>
            </div>
            </div>
          
            </div>  
            <button
              onClick={() => setModal(false)}
              className="me-3 inline-flex h-10 items-center justify-center justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
              aria-label="close dialog"
            >
              <span className="relative only:-mx-5">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-79 desc-79"
                >
                  <title id="title-79">Icon title</title>
                  <desc id="desc-79">
                    A more detailed description of the icon
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                      </span>
            </button>
    </div>
    </div>
        
      )
}
