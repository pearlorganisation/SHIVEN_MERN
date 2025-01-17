import mongoose from "mongoose";

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  files: [
     {
    fileName: { type: String, required: true },
    file: { type: Object, required: true }, // URL from Cloudinary
  },], // Store file URLs or IDs
  isPrivate: { type: Boolean, default: false }, 
  isDeleteAllowed: { type: Boolean, default: true }, 
});

const filesAndFoldersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User",
    },
    folders: [folderSchema], // Array of folders
  },
  { timestamps: true }
);

export default mongoose.model("FilesAndFolders", filesAndFoldersSchema);
