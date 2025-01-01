import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { addCustomisedForm, getAllCustomisedForm } from "../actions/customisedForm";


const initialState = {
  isLoading: false,
  isCreated: false,
  isDeleted: false,
  customisedFormData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const customisedFormSlice = createSlice({
  name: "customisedForm",
  initialState,
  reducers: {
    clearIsCreated : (state)=> {state.isCreated = false}
  },
  extraReducers: (builder) => {
    builder

      .addCase(addCustomisedForm.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(addCustomisedForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.errorMessage = "";
        toast.success("Customised Form Added Successfully",{
          position:"top-center"
        });
      })
      .addCase(addCustomisedForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getAllCustomisedForm.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(getAllCustomisedForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = "";
        state.customisedFormData = action.payload.data;
      })
      .addCase(getAllCustomisedForm.rejected, (state, action) => {
        state.isLoading = false;
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
export const {clearIsCreated} = customisedFormSlice.actions;
export default customisedFormSlice.reducer;
