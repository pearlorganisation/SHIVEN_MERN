import React from 'react'

export default function ReplyModal ({viewData,setModal}) {
  

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
          className="flex w-[60%] justify-center rounded bg-white py-6 shadow-xl "
          id="modal"
          role="document"
        >
             
          <div className='flex  w-[70%] flex-col justify-center gap-5'>
    
 <div className='px-8 space-y-5'> 
           <div>  <p>Client Message :</p>
   <div className="rounded-lg border-2 w-full">
                <div className='w-full h-full text-gray-500 p-2'> Plan is not showing properly.</div>
            </div>
            </div> 
            <div>
            <p>Reply Message :</p>
   <div className=" rounded-lg border-2">

                <textarea type="text" className='h-52 w-full outline-none'  />
            </div>
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
