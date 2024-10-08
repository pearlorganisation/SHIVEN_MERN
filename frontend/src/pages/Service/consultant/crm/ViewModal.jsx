import React from 'react'

export default function ViewModal ({viewData,setModal}) {
    const createdAtDate = viewData?.updatedAt ? new Date(viewData?.updatedAt) : null;
  const formattedDate = createdAtDate ? createdAtDate.toISOString().split('T')[0] : '';

  return (
    <div
    className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdroap-blur-sm"
    aria-labelledby="header-3a content-3a"
    aria-modal="true"
    tabindex="-1"
    role="dialog"
  >
    {/*    <!-- Modal --> */}
    <div
      className="flex h-[90%] w-[80%] sm:w-[100%]  flex-col gap-6 overflow-hidden rounded bg-white p-6 shadow-xl "
      id="modal"
      role="document"
    >
      {/*        <!-- Modal header --> */}
      <header id="header-3a" className="flex items-center gap-4">
        <h3 className="flex-1 text-xl font-medium text-slate-700">
        Calls Listing
        </h3>
        <div>Last Updated : 10 Oct 2024 </div>
        <button
          onClick={() => setModal(false)}
          className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
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
      </header>
      {/*        <!-- Modal body --> */}
      <div id="content-3a" className="flex-1 overflow-auto space-y-10">

      <table className="w-full table-auto text-sm">
    <tbody className="text-gray-600">
      <tr>
        <td className="py-2 px-10 border border-gray-300">Date</td>
        <td className="py-2 px-10 border border-gray-300">Call In / Out</td>
        <td className="py-2 px-10 border border-gray-300">Start Time</td>
        <td className="py-2 px-10 border border-gray-300">End Time</td>
        <td className="py-2 px-10 border border-gray-300">Subject </td>
        <td className="py-2 px-10 border border-gray-300">Notes</td>
      </tr>
      <tr>
        <td className="py-2 px-2 text-center border border-gray-300">08-10-24</td>
        <td className="py-2 px-2 text-center border border-gray-300">Call In</td>
        <td className="py-2 px-2 text-center border border-gray-300">9:20 AM</td>
        <td className="py-2 px-2 text-center border border-gray-300">10:00 AM</td>
        <td className="py-2 px-2 text-center border border-gray-300">Dummy Data</td>
        <td className="py-2 px-2 text-center border border-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at commodi impedit aperiam! Atque, veniam. Vitae obcaecati accusantium, autem optio atque et voluptatum, nam non illo.</td>
      </tr>
 
 
    
      
    </tbody>
  </table>
      </div>

</div>
</div>
  )
}
