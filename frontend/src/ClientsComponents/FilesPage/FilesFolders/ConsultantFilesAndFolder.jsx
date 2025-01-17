import React, { useEffect, useState } from "react";
import { FaRegFolder, FaFile, FaCaretDown } from "react-icons/fa";
import { FaFolderPlus, FaFileCirclePlus } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addFilesAndFolders, deleteFile, deleteFolder, getAllFilesAndFolders, renameFile, renameFolder, togglePrivacyFolder } from "../../../features/actions/filesAndFolders";
import { useParams } from "react-router-dom";


const ConsultantFilesAndFolder = () => {
  const {id}=useParams()
  const dispatch = useDispatch();
  const { filesAndFoldersData, isCreated,isLoading } = useSelector((state) => state.filesAndFolders);
  const [editingIndex, setEditingIndex] = useState(null);
  const [routes, setRoutes] = useState("");
  const [fileData, setFileData] = useState(null);

  const handleClick = (item) => {
    if (!editingIndex) {
      setRoutes(`${item.name}`);
    }
  };

  const handleRename = (index) => {
    setEditingIndex(index);
  };

  const handleRenameSubmit = (e,oldFolderName) => {
    setEditingIndex(null);
    dispatch(renameFolder({oldFolderName,newFolderName:e.target.value,userId: id}))
  };
  const handleRenameFile = (e,oldFileName) => {
    setEditingIndex(null);
    dispatch(renameFile({folderName:routes,oldFileName,newFileName:e.target.value,userId: id}))
  };

  const handleDeleteFolder = (folderName) => {
    setEditingIndex(null);
    dispatch(deleteFolder({folderName,userId: id}))
  };
  
  const handleDeleteFile = (folderName,fileName) => {
    setEditingIndex(null);
    dispatch(deleteFile({folderName,fileName,userId: id}))
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFileData(e.target.files[0]);
      e.target.value=""
    }
  };
  const handleSubmit = (e) => {
    try {
      if (e.target.value) {
        const formData = new FormData();
        formData.append("fileName", e.target.value);
        formData.append("pdf", fileData);
        formData.append("userId", id);
        formData.append("folderName", routes);

        dispatch(addFilesAndFolders(formData));

        setFileData(null);
      }
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };

  const folderCreate = () => {
    setEditingIndex(null);
    let baseName = "New Folder";
    let folderName = baseName;
    let count = 1;

    const folderNames = filesAndFoldersData.map((folder) => folder.name);

    while (folderNames.includes(folderName)) {
      folderName = `${baseName} (${count})`;
      count++;
    }
    dispatch(addFilesAndFolders({ userId: id, folderName }));
  };

  useEffect(() => {
    if (isCreated) {
      dispatch(getAllFilesAndFolders(id));
    }
  }, [isCreated]);

  useEffect(() => {
    dispatch(getAllFilesAndFolders(id));
  }, []);

  useEffect(() => {

  }, [fileData]);

  return (
    <div className="w-full min-h-[100dvh]">
      <div className="w-full h-16 border justify-between border-neutral-300 flex items-center ps-6 pr-10">
        <h1 className="text-3xl text-gray-800 font-semibold">Consultant Files and Folders</h1>
        <div className="px-20">
          {routes.trim() !== "" ? (
            <div
              className="px-6 py-1 rounded cursor-pointer text-white bg-blue-700 hover:bg-blue-600"
              onClick={() => {setRoutes("")
                setFileData(null)
                setEditingIndex(null);
              }}
            >
              Back
            </div>
          ) : (
            <FaFolderPlus onClick={folderCreate} className="cursor-pointer text-4xl" />
          )}
        </div>
      </div>
      <BreadCrumb routes={routes} setRoutes={setRoutes} setFileData={setFileData} />
      <div
        className={`w-full h- overflow-hidden py-2 px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 bg-neutral-100 rounded-lg`}
      >
        {!routes.trim() ? (
          filesAndFoldersData.length > 0 ?
          filesAndFoldersData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (editingIndex !== index) {
                  handleClick(item);
                }
              }}
              className="cursor-pointer relative flex flex-col gap-2 items-center justify-center w-36 h-36 border border-neutral-300 rounded-xl"
            >

              <FcOpenedFolder className="text-6xl" />
              {editingIndex === index ? (
                <input
                  type="text"
                  className=" w-full text-center "
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && handleRenameSubmit(e,item.name)}
                />
              ) : (
                <p className="text-center">{item.name}</p>
              )}
              <div
                className="absolute right-2 text-black top-1"
                onClick={(e) => e.stopPropagation()}
              >
                {item.isDeleteAllowed && (
                  <Menu
                    menuButton={
                      <MenuButton className="h-9 w-9 flex justify-center items-center">
                        <HiDotsVertical />
                      </MenuButton>
                    }
                    transition
                  >
                    <MenuItem onClick={() => handleRename(index)}>Rename</MenuItem>
                    <MenuItem onClick={() => handleDeleteFolder(item.name)}>Delete</MenuItem>
                  </Menu>
                )}
              </div>
            </div>
          )): <div className="w-full col-span-full text-neutral-400 ">Ready to organize? Add a folder now!</div>
        ) : 
        !isLoading ?   (
          filesAndFoldersData
            .find((selectedFolder) => routes.trim() === selectedFolder.name)
            ?.files?.map((file, index2) => (
<>
  <a
    key={index2}
    target="_blank"
    href={file.file.secure_url}
    className="cursor-pointer relative flex flex-col gap-2 items-center justify-center w-36 h-36 border border-neutral-300 shadow-md rounded-xl"
    onClick={(e) => {
      // Prevent clicks originating from the menu from triggering the link
      if (e.target.closest(".menu-container")) {
        e.preventDefault();
      }
    }}
  >
    <FaFile className="text-blue-600 text-6xl" />
    {editingIndex === index2 ? (
                <input
                  type="text"
                  className=" w-full text-center "
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && handleRenameFile(e,file.fileName)}
                />
              ) : (
                <p className="text-blue-600 font-semibold">{file.fileName}</p>
              )}
 
    <div
      className="absolute right-2 text-black top-1 menu-container" // Add a unique class for menu-related events
    >
      <Menu
        menuButton={
          <MenuButton className="h-9 w-9 flex justify-center items-center">
            <HiDotsVertical />
          </MenuButton>
        }
        transition
      >
         <MenuItem onClick={() => handleRename(index2)}>Rename</MenuItem>
        <MenuItem onClick={() =>handleDeleteFile(routes,file.fileName)}>Delete</MenuItem>
      </Menu>
    </div>
  </a>
</>

            ))
        ) : <div className="w-full col-span-full">Uploading a new file...</div>}
        {fileData && !isLoading && (
          <a
            className="cursor-pointer relative flex flex-col gap-2 items-center justify-center w-36 h-36  border border-neutral-300 shadow-md rounded-xl"
          >
            <FaFile className="text-blue-600 text-6xl" />
            <input
              className="text-blue-600 font-semibold w-32 text-center rounded-sm px-1"
              autoFocus
              onMouseEnter={handleSubmit}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
          </a>
        )}
       {routes.trim() && !isLoading &&<label
          htmlFor="file"
          className="cursor-pointer border-dashed relative flex flex-col gap-2 items-center justify-center w-36 h-36 border border-neutral-300 rounded-xl"
        >
          <FaFileCirclePlus className="text-black-500 text-6xl" />
          <span className="text-neutral-800">Add a new File</span>
          <input
            id="file"
            accept=".png, .jpg, .jpeg, .webp, .pdf"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>}
      </div>
    </div>
  );
};

export default ConsultantFilesAndFolder;

const BreadCrumb = ({ routes, setRoutes ,setFileData}) => (
  <div className="w-full h-10 flex items-center px-7">
    <div className="flex gap-4">
      <div
        className={`flex gap-4 ${routes.trim() ? "text-blue-700" : "text-gray-500"}`}
      >
        <FaRegFolder size={25} />
        <p onClick={() => {
          setRoutes("")
          setFileData("")}} className="cursor-pointer">
          Files & Folders
        </p>
      </div>
      {routes &&
        routes.split("/").map((route, index) => (
          <div key={index} className="flex gap-4">
            <p className="text-gray-500">/</p>
            <p className="text-gray-500 cursor-pointer">{route}</p>
          </div>
        ))}
    </div>
  </div>
);
