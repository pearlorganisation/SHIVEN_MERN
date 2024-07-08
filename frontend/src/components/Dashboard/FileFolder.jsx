import React from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
const FileFolder = () => {
  return (
    <>
    
      <div className="text text-center p-5">

        <h1 className="text-xl md-text-6xl font-medium">Files & Folder</h1>
        <h1 className="text md-text-6xl font-medium">
          Store your important Document here{" "} 
        </h1>
      </div>

      <section className="">

       
        
      <div className="container mx-auto px-3">
      <div><p>Folders </p></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5  place-items-center">
          <div>
            <IoFolderOpenOutline size={100} className="text-[#4c9aff]"/>
            <p className="text-sm">insurance file</p>
            <p className="text-sm">20 files, 40mb</p>
          </div>
          <div>
            <IoFolderOpenOutline  size={100} className="text-[#4c9aff]"/>
            <p className="text-sm">insurance file</p>
            <p className="text-sm">20 files, 40mb</p>
          </div>
          <div>
            <IoFolderOpenOutline size={100} className="text-[#4c9aff]"/>
            <p className="text-sm">insurance file</p>
            <p className="text-sm">20 files, 40mb</p>
          </div>
          <div>
            <IoFolderOpenOutline size={100} className="text-[#4c9aff]"/>
            <p>insurance file</p>
            <p>20 files, 40mb</p>
          </div>
        </div>
        <div>
            <p>
                Files
            </p> 
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5  place-items-center ">
           {
                Array(8).fill(true).map(item =>
                
                {
                    return <div className="bg-blue-500 size-32 p-1 pt-6 rounded">
                        <div className="bg-white w-full h-full rounded">
                            <p>title</p>
                        </div>
                    </div>
                })
            }
           </div>
        </div>
        </div>
      </section>
     
    </>
  );
};

export default FileFolder;
