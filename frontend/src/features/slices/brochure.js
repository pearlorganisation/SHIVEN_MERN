import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { addTemplate, getAllTemplates } from "../actions/brochure";


const initialState = {
  isLoading: false,
  isCreated: false,
  isDeleted: false,
  templateData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const brochureSlice = createSlice({
  name: "brochure",
  initialState,
  reducers: {
    clearIsCreated : (state)=> {state.isCreated = false}
  },
  extraReducers: (builder) => {
    builder

      .addCase(addTemplate.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(addTemplate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.errorMessage = "";
        // state.templateData = action.payload.data;
        toast.success("Template Added Successfully",{
          position:"top-center"
        });
      })
      .addCase(addTemplate.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getAllTemplates.pending, (state, action) => {
        state.isLoading = true;

        state.errorMessage = "";
      })
      .addCase(getAllTemplates.fulfilled, (state, action) => {
        state.isLoading = false;

        state.errorMessage = "";
        state.templateData = action.payload.data;
      })
      .addCase(getAllTemplates.rejected, (state, action) => {
        state.isLoading = false;

        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {clearIsCreated} = brochureSlice.actions;
export default brochureSlice.reducer;
