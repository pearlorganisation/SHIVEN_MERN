import React, { useEffect, useState, useRef } from "react";
import { FaRegFolder, FaFolderPlus, FaFile, FaCaretDown } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { HiDotsVertical } from "react-icons/hi";

const folders = [
  { id: 1, label: "Documents", type: "folder", isDeleteAllowed: false },
  { id: 2, label: "Pictures", type: "folder", isDeleteAllowed: false },
  { id: 3, label: "Music", type: "folder", isDeleteAllowed: false },
  { id: 4, label: "Videos", type: "folder", isDeleteAllowed: false },
  { id: 5, label: "Downloads", type: "folder", isDeleteAllowed: false },
];

const files = [
  { id: 1, label: "File 1", type: "file" },
  { id: 2, label: "File 2", type: "file" },
  { id: 3, label: "File 3", type: "file" },
  { id: 4, label: "File 4", type: "file" },
  { id: 5, label: "File 5", type: "file" },
];

const FilesFolders = () => {
  const [routes, setRoutes] = React.useState("");

  function deleteElementAtIndex(index) {
    if (index >= 0 && index < folderData.length) {
      const arr = [...folderData];
      arr.splice(index, 1);
      setFolderData(arr);
    } else {
      console.log("Index out of bounds");
    }
    return arr;
  }

  function renameFolder(index, newLabel) {
    setFolderData((prevFolders) => {
      const updatedFolders = [...prevFolders];
      updatedFolders[index].label = newLabel;
      return updatedFolders;
    });
  }

  const createFolder = () => {
    setFolderData((prev) => [
      ...prev,
      { id: 6, label: "New Folder", type: "folder", isDeleteAllowed: true },
    ]);
  };
  const DynamicFolderRef = useRef(null);
  const StaticFolderRef = useRef(null);

  const [folderData, setFolderData] = useState([]);
  const [fileData, setFileData] = useState(files);
  return (
    <div className="w-full min-h-[100dvh]">
      <div className="w-full h-16 border justify-between border-neutral-300 flex items-center ps-6 pr-10">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Files and Folders
        </h1>

        <div className="px-20">
          {routes.trim() !== "" ? (
            <div
              className="px-6 py-1 rounded text-white bg-blue-700"
              onClick={() => setRoutes("")}
            >
              Back
            </div>
          ) : (
            <FaFolderPlus
              onClick={createFolder}
              className="cursor-pointer text-4xl"
            />
          )}
        </div>
      </div>
      <BreadCrumb routes={routes} setRoutes={setRoutes} />

      {!routes.trim() ? (
        <>
          <FoldersContainer
            folderTitle="Static Folders"
            folderData={folders}
            prefix="Static"
            renameFolder={renameFolder}
            deleteElementAtIndex={deleteElementAtIndex}
            setRoutes={setRoutes}
          />

          {folderData.length > 0 && (
            <FoldersContainer
              folderTitle="Dynamic Folders"
              folderData={folderData}
              prefix="Dynamic"
              renameFolder={renameFolder}
              deleteElementAtIndex={deleteElementAtIndex}
              setRoutes={setRoutes}
            />
          )}
        </>
      ) : (
        <div className="w-full grid grid-cols-8 gap-y-8 p-5 bg-neutral-100 rounded-lg h-full ">
          {fileData.map((data, index) => {
            return <FileIcon index={index} file={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FilesFolders;

const FoldersContainer = (props) => {
  const {
    folderTitle,
    folderData,
    prefix,
    renameFolder,
    deleteElementAtIndex,
    setRoutes,
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("auto");

  const toggleFolders = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <>
      <div
        onClick={toggleFolders}
        className="w-full h-10 bg-neutral-300 flex gap-2 items-center text-xl font-semibold px-5"
      >
        <FaCaretDown
          className={`transition-transform ${
            isOpen ? "" : "transform -rotate-90"
          } `}
        />{" "}
        <p>{folderTitle}</p>
      </div>
      <div
        ref={contentRef}
        style={{ height }}
        className={`w-full overflow-hidden transition-height  grid grid-cols-8 gap-y-8 bg-neutral-100 rounded-lg ${
          isOpen ? "p-5" : " ease-in-out duration-100"
        }`}
      >
        {folderData.map((data, index) => {
          return (
            <FolderIcon
              index={index}
              prefix={prefix}
              renameFolder={renameFolder}
              deleteElement={deleteElementAtIndex}
              setRoutes={setRoutes}
              folder={data}
            />
          );
        })}
      </div>
    </>
  );
};

const BreadCrumb = (props) => {
  const { routes, setRoutes } = props;

  return (
    <div className="w-full h-10 flex items-center px-7">
      <div className="flex gap-4">
        <div
          className={`flex  gap-4 ${
            routes.trim() ? "text-blue-700" : "text-gray-500"
          }`}
        >
          <FaRegFolder size={25} />
          <p onClick={() => setRoutes("")} className="">
            Folders
          </p>
        </div>
        {routes &&
          routes.split("/").map((route, index) => {
            return (
              <div key={index} className="flex gap-4">
                <p className="text-gray-500">/</p>
                <p className="text-gray-500">{route}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const FolderIcon = (props) => {
  const { folder, setRoutes, index, deleteElement, renameFolder, prefix } =
    props;
  const [isEditing, setIsEditing] = useState(false);
  const [newLabel, setNewLabel] = useState(folder.label);

  function handleClick() {
    if (!isEditing) {
      setRoutes(`${prefix}/${folder.label}`);
    }
  }

  function handleRename() {
    setIsEditing(true);
  }

  function handleRenameSubmit() {
    renameFolder(index, newLabel);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleRenameSubmit();
    }
  }

  return (
    <div
      key={index}
      onClick={handleClick}
      className="cursor-pointer relative flex flex-col gap-2 items-center justify-center w-36 h-36 border border-neutral-300 rounded-xl"
    >
      <FcOpenedFolder className=" text-6xl" />

      {isEditing ? (
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          onBlur={handleRenameSubmit}
          onKeyDown={handleKeyDown}
          className="outline-none focus:outline-none w-full text-center border-none focus:ring-0 focus:border-none ring-0"
          autoFocus
        />
      ) : (
        <p>{folder.label}</p>
      )}

      <div
        className="absolute right-2 text-black top-1"
        onClick={(e) => e.stopPropagation()}
      >
        {folder.isDeleteAllowed && (
          <Menu
            menuButton={
              <MenuButton className="h-9 w-9 flex justify-center items-center">
                <HiDotsVertical />
              </MenuButton>
            }
            transition
          >
            <MenuItem onClick={handleRename}>Rename</MenuItem>
            <MenuItem onClick={() => deleteElement(index)}>Delete</MenuItem>
          </Menu>
        )}
      </div>
    </div>
  );
};

const FileIcon = (props) => {
  const { file, index } = props;
  return (
    <div
      key={index}
      className="cursor-pointer relative flex flex-col gap-2 items-center justify-center w-36 h-36 border border-neutral-300 rounded-xl"
    >
      <FaFile className="text-neutral-500 text-6xl" />
      <p>{file.label}</p>
    </div>
  );
};
