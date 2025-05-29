import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  date: string;
  description: string;
  result: string;
  commands: string;
  attendance: number | undefined;
}

const initialState: FormState = {
  date: "",
  description: "",
  result: "",
  commands: "",
  attendance: undefined,
};

export const formSlice = createSlice({
  name: "forming",
  initialState,
  reducers: {
    updateFormInfo: (state, action: PayloadAction<FormState>) => {
      state.date = action.payload.date;
      state.description = action.payload.description;
      state.result = action.payload.result;
      state.commands = action.payload.commands;
      state.attendance = action.payload.attendance;
    },
    updateDate: (state, action: PayloadAction<FormState>) => {
      state.date = action.payload.date;
    },
    updateDescription: (state, action: PayloadAction<FormState>) => {
      state.description = action.payload.description;
    },
    updateResult: (state, action: PayloadAction<FormState>) => {
      state.result = action.payload.result;
    },
    updateCommands: (state, action: PayloadAction<FormState>) => {
      state.commands = action.payload.commands;
    },
    updateAttendance: (state, action: PayloadAction<FormState>) => {
      state.attendance = action.payload.attendance;
    },
  },
});

export const { updateFormInfo } = formSlice.actions;
export default formSlice.reducer;
