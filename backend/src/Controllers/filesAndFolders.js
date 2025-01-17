// ---------------------------------------------Imports--------------------------------------------------------
import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import { cloudinary, uploaderCloudinary} from "../Configs/Cloudinary/cloudinaryConfig.js";
import { CustomError } from "../Utils/Error/CustomError.js";
import FilesAndFolders from "../Models/filesAndFolders.js";


// ------------------------------------------------------------------------------------------------------------

export const createOrAddFileToFolder = asyncErrorHandler(async (req, res, next) => {
  const { userId, folderName, isPrivate, fileName } = req.body;
  let pdf;
  let folderIndex;

  // Upload file to Cloudinary if provided
  if (req.file?.path) {
    pdf = await uploaderCloudinary(req.file?.path);
  }

  if (!fileName && pdf) {
    return res.status(400).json({
      success: false,
      message: "File name is required when uploading a file.",
    });
  }

  // Find user-specific document
  let userFiles = await FilesAndFolders.findOne({ userId });

  if (!userFiles) {
    // Create a new folder document if no entry exists for the user
    userFiles = await FilesAndFolders.create({
      userId,
      folders: [
        {
          name: folderName,
          files: pdf ? [{ fileName, file: pdf }] : [],
          isPrivate,
        },
      ],
    });
  } else {
    // Check if folder already exists
    folderIndex = userFiles.folders.findIndex((folder) => folder.name === folderName);

    if (folderIndex !== -1) {
      // Folder exists, check if there's no file uploaded
      if (!pdf) {
        return res.status(400).json({
          success: false,
          message: "Folder already exists, and no file was uploaded.",
        });
      }

      // Check for duplicate file name
      const fileExists = userFiles.folders[folderIndex].files.some(
        (file) => file.fileName === fileName
      );

      if (fileExists) {
        return res.status(400).json({
          success: false,
          message: "A file with the same name already exists in this folder.",
        });
      }

      // Add file to existing folder
      userFiles.folders[folderIndex].files.push({ fileName, file: pdf });
    } else {
      // Add a new folder
      userFiles.folders.push({
        name: folderName,
        files: pdf ? [{ fileName, file: pdf }] : [],
        isPrivate,
      });
    }

    await userFiles.save();
  }

  return res.status(201).json({
    success: true,
    message:
 pdf
          ? "File added to folder"
        : "Folder created successfully"
  });
});

  
export const renameFolder = asyncErrorHandler(async (req, res, next) => {
    const { userId, oldFolderName, newFolderName } = req.body;
  
    if (!oldFolderName || !newFolderName) {
      return res.status(400).json({
        success: false,
        message: "Both oldFolderName and newFolderName are required.",
      });
    }
  
    // Find and Update the Folder Name
    const result = await FilesAndFolders.findOneAndUpdate(
      { userId, "folders.name": oldFolderName },
      { $set: { "folders.$.name": newFolderName } },
      { new: true }
    );
  
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Folder not found or user does not exist.",
      });
    }
  
    return res.status(200).json({
      success: true,
      message: "Folder renamed successfully."
    });
  });

export const renameFile = asyncErrorHandler(async (req, res, next) => {
    const { userId,folderName, oldFileName, newFileName } = req.body;
  
    if (!oldFileName || !newFileName) {
      return res.status(400).json({
        success: false,
        message: "Both oldFileName and newFileName are required.",
      });
    }
  
    // Find and Update the Folder Name
    const result = await FilesAndFolders.findOneAndUpdate(
      { userId, "folders.name": folderName, "folders.files.fileName": oldFileName }, // Match user, folder, and specific file
      { $set: { "folders.$[folder].files.$[file].fileName": newFileName } }, // Update the file name
      {
        arrayFilters: [
          { "folder.name": folderName }, // Match the folder
          { "file.fileName": oldFileName } // Match the specific file
        ],
        new: true, // Return the updated document
      }
    );
  
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Folder not found or user does not exist.",
      });
    }
  
    return res.status(200).json({
      success: true,
      message: "File renamed successfully."
    });
  });

  export const updateFolderPrivacy  = asyncErrorHandler(async (req, res, next) => {
    const { userId, folderName,isPrivate } = req.body;
  
    // Find and Update the Folder Name
    const result = await FilesAndFolders.findOneAndUpdate(
      { userId, "folders.name": folderName },
      { $set: { "folders.$.isPrivate": isPrivate } },
      { new: true }
    );
  
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Folder not found or user does not exist.",
      });
    }
  
    return res.status(200).json({
      success: true,
      message: isPrivate ? "Folder is now private." : "Folder is now public."
    });
  });  
  
  

export const getFilesAndFolders = asyncErrorHandler(
  async (req, res, next) => {
    const {id}= req?.params
    const data = await FilesAndFolders.findOne({userId:id});

    return res.status(200).json({
      success: true,
      message: "Files And Folders Data Found Successfully",
      data,
    });
  }
);

export const getPublicFilesAndFolders = asyncErrorHandler(
  async (req, res, next) => {
    const {id}= req?.params
    const data = await FilesAndFolders.findOne(
      { userId: id, "folders.isPrivate": false }, // Match documents with non-private folders
      { "folders.$": 1 } // Include only the matched folder(s)
    );

    console.log(data)

    return res.status(200).json({
      success: true,
      message: "Files And Folders Data Found Successfully",
      data,
    });
  }
);

export const deleteFolder = asyncErrorHandler(
  async (req, res, next) => {
    const { userId, folderName } = req.body;

    const result = await FilesAndFolders.findOneAndUpdate(
      { userId, "folders.name": folderName },
      { $pull: { folders: { name: folderName } } }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Folder not found or user does not exist.",
      });
    }

    const deletedFile =  result?.folders.find((item)=>item.name=== folderName)?.files.map((item)=>item.file.public_id)
  
    cloudinary.api.delete_resources([...deletedFile]).then(({ deleted }) => console.log(deleted))


    return res.status(200).json({
      success: true,
      message: "Folder deleted successfully"
    });
  }
);

export const deleteFile = asyncErrorHandler(
  async (req, res, next) => {
    const { userId, fileName,folderName } = req.body;

    const result = await FilesAndFolders.findOneAndUpdate(
      { userId, "folders.name": folderName },
      { $pull: { "folders.$.files": {fileName} } }
    );
    
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Folder not found or user does not exist.",
      });
    }
    
    const deletedFile =  result?.folders.find((item)=>item.name=== folderName)?.files.find((item)=>item.fileName===fileName)?.file?.public_id
    cloudinary.api.delete_resources(deletedFile).then(({ deleted }) => console.log(deleted))

    return res.status(200).json({
      success: true,
      message: "File deleted successfully"
    });
  }
);


