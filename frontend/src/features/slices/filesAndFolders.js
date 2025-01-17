import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { addFilesAndFolders, deleteFile, deleteFolder, getAllFilesAndFolders, getAllPublicFilesAndFolders, renameFile, renameFolder, togglePrivacyFolder } from "../actions/filesAndFolders";



const initialState = {
  isLoading: false,
  isCreated: false,
  isFileAdded: false,
  filesAndFoldersData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const filesAndFoldersSlice = createSlice({
  name: "filesAndFolders",
  initialState,
  reducers: {
    clearIsCreated : (state)=> {state.isCreated = false}
  },
  extraReducers: (builder) => {
    builder

      .addCase(addFilesAndFolders.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(addFilesAndFolders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.errorMessage = "";
        toast.success(action.payload.data.message,{
          position:"top-center"
        });
      })
      .addCase(addFilesAndFolders.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = action.payload.response.data.message;
        toast.error(state.errorMessage || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(renameFolder.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(renameFolder.fulfilled, (state, action) => {

        state.isCreated = true;
        state.errorMessage = "";
        toast.success("Renamed the folder Successfully",{
          position:"top-center"
        });
      })
      .addCase(renameFolder.rejected, (state, action) => {

        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(renameFile.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(renameFile.fulfilled, (state, action) => {

        state.isCreated = true;
        state.errorMessage = "";
        toast.success("Renamed the file Successfully",{
          position:"top-center"
        });
      })
      .addCase(renameFile.rejected, (state, action) => {

        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(togglePrivacyFolder.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(togglePrivacyFolder.fulfilled, (state, action) => {
        state.isCreated = true;
        state.errorMessage = "";
        toast.success(action.payload.data.message,{
          position:"top-center"
        });
      })
      .addCase(togglePrivacyFolder.rejected, (state, action) => {

        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(deleteFolder.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(deleteFolder.fulfilled, (state, action) => {
        state.isCreated = true;
        state.errorMessage = "";
        toast.success("Delete the folder successfully",{
          position:"top-center"
        });
      })
      .addCase(deleteFolder.rejected, (state, action) => {
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(deleteFile.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.isCreated = true;
        state.errorMessage = "";
        toast.success("Delete the file successfully",{
          position:"top-center"
        });
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getAllFilesAndFolders.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(getAllFilesAndFolders.fulfilled, (state, action) => {
        state.isCreated = false;
        state.errorMessage = "";
        state.filesAndFoldersData = action.payload.data ? action.payload.data.folders:[];
      })
      .addCase(getAllFilesAndFolders.rejected, (state, action) => {
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      })
      .addCase(getAllPublicFilesAndFolders.pending, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(getAllPublicFilesAndFolders.fulfilled, (state, action) => {
        state.isCreated = false;
        state.errorMessage = "";
        state.filesAndFoldersData = action.payload.data ? action.payload.data.folders:[];
      })
      .addCase(getAllPublicFilesAndFolders.rejected, (state, action) => {
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {clearIsCreated} = filesAndFoldersSlice.actions;
export default filesAndFoldersSlice.reducer;
