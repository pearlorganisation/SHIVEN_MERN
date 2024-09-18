// import DropdownBasic from "../../components/Dropdown/Dropdown";
import { useRef, useState } from "react";
// import Bot from "../../assets/Bot.jpg";

const Documents = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [x, setX] = useState(0);
  const documents = [
    "Aadhaar Card",
    "PAN Card",
    "Driving License",
    "Birth Certificate",
  ];

  const fileInputRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setX(x + 1);
  };
  return (
    <div className="h-[100vh]">
      <div>
        <div className="flex justify-between items-center px-10 "><h1 className="text-center text-4xl text-blue-500 py-8">
          Save Your Documents
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 h-16 text-white rounded-lg px-5">Add New Document </button></div>
  
        <div className="p-10 flex flex-col  gap-5">
          <div className="grid  grid-cols-3 gap-3">
            {documents.map((item, idx) => {
              return (
                <div key={idx}>
                  <h1 className="text-xl leading-[30px] font-medium text-[#315288] mt-4">
                    {item}
                  </h1>
                  <div className="border-[#0D5C2A] border-dashed  border-2 rounded-md max-w-min flex flex-col mt-4">
                    <div className="p-3 flex items-center justify-center mt-4">
                      <svg
                        width="38"
                        height="31"
                        viewBox="0 0 38 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                      >
                        <path
                          d="M34.4688 5.65626H19.5818L14.7812 0.855678C14.521 0.593377 14.2113 0.385417 13.87 0.243888C13.5287 0.102359 13.1626 0.0300838 12.7932 0.0312642H3.53125C2.78533 0.0312642 2.06996 0.32758 1.54251 0.855026C1.01507 1.38247 0.71875 2.09784 0.71875 2.84376V28.2652C0.71968 28.982 1.00481 29.6691 1.51162 30.1759C2.01842 30.6827 2.70553 30.9678 3.42227 30.9688H34.6252C35.3293 30.9678 36.0044 30.6877 36.5023 30.1898C37.0002 29.6919 37.2803 29.0169 37.2812 28.3127V8.46876C37.2812 7.72284 36.9849 7.00747 36.4575 6.48003C35.93 5.95258 35.2147 5.65626 34.4688 5.65626ZM12.7932 2.84376L15.6057 5.65626H3.53125V2.84376H12.7932ZM34.4688 28.1563H3.53125V8.46876H34.4688V28.1563ZM19 12.6875C19.373 12.6875 19.7306 12.8357 19.9944 13.0994C20.2581 13.3631 20.4062 13.7208 20.4062 14.0938V16.9063H23.2188C23.5917 16.9063 23.9494 17.0544 24.2131 17.3181C24.4768 17.5819 24.625 17.9396 24.625 18.3125C24.625 18.6855 24.4768 19.0432 24.2131 19.3069C23.9494 19.5706 23.5917 19.7188 23.2188 19.7188H20.4062V22.5313C20.4062 22.9042 20.2581 23.2619 19.9944 23.5256C19.7306 23.7894 19.373 23.9375 19 23.9375C18.627 23.9375 18.2694 23.7894 18.0056 23.5256C17.7419 23.2619 17.5938 22.9042 17.5938 22.5313V19.7188H14.7812C14.4083 19.7188 14.0506 19.5706 13.7869 19.3069C13.5232 19.0432 13.375 18.6855 13.375 18.3125C13.375 17.9396 13.5232 17.5819 13.7869 17.3181C14.0506 17.0544 14.4083 16.9063 14.7812 16.9063H17.5938V14.0938C17.5938 13.7208 17.7419 13.3631 18.0056 13.0994C18.2694 12.8357 18.627 12.6875 19 12.6875Z"
                          fill="#393939"
                        />
                      </svg>
                    </div>

                    <div className="px-6 py-4 flex items-center justify-center mb-3">
                      <button
                        onClick={() => fileInputRef.current.click()}
                        className="rounded-md bg-[#419A62] border font-medium text-base leading-6 border-green-100 text-white w-60 h-10"
                      >
                        {" "}
                        Browse
                      </button>

                      <input
                        onChange={handleChange}
                        multiple={false}
                        ref={fileInputRef}
                        type="file"
                        hidden
                      />
                    </div>

                    <div className="px-6 mt-2 mb-2 w-full hidden">
                      <button
                        className="bg-[#419A62] text-white active:bg-text-red-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        Open regular modal
                      </button>
                      {showModal ? (
                        <div>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative bg-white rounded-lg">
                              {/*content*/}
                              <div className="border-0 rounded-2xl relative flex flex-col w-full lg:w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <div className=" flex flex-row gap-4">
                                    <img src={Bot} className="w-8 h-8" />
                                    <h1 className="text-[#393939] font-light text-base leading-6">
                                      {" "}
                                      Please Fill the Details !
                                    </h1>
                                  </div>
                                  <div className="flex flex-col lg:flex-row gap-3 mt-4">
                                    <div className="flex flex-row gap-3 items-center justify-start">
                                      <h1 className="text-[#393939] font-light text-base leading-6">
                                        {" "}
                                        File Name :{" "}
                                      </h1>{" "}
                                      <input
                                        type="text"
                                        placeholder="File Name"
                                        className="border-2 border-green-200 rounded-md p-1"
                                      />
                                    </div>

                                    <div className="flex flex-row gap-3 items-center justify-center">
                                      <h1 className="text-[#393939] font-light text-base leading-6">
                                        {" "}
                                        Person Name :{" "}
                                      </h1>{" "}
                                      <input
                                        type="text"
                                        placeholder="Person Name"
                                        className="border-2 border-green-200 rounded-md p-1"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end px-6 mb-3">
                                  <button
                                    className="bg-[#419A62] w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>
                      ) : null}
                    </div>

                    <div className="hidden">
                      <div className="flex justify-between px-2 items-center border-t-2 border-t-green-300">
                        <h4 className="text-[#393939]  font-semibold ">
                          Aadhar
                        </h4>
                        {/* <DropdownBasic /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
