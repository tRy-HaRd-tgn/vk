import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  date?: string;
  description?: string;
  result?: string;
  commands?: string;
  attendance?: number | undefined;
}

const initialState: FormState = {
  date: "",
  description: "",
  result: "",
  commands: "",
  attendance: 0,
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
    updateDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    updateResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
    updateCommands: (state, action: PayloadAction<string>) => {
      state.commands = action.payload;
    },
    updateAttendance: (state, action: PayloadAction<number>) => {
      state.attendance = action.payload;
    },
  },
});

export const {
  updateFormInfo,
  updateDate,
  updateDescription,
  updateResult,
  updateCommands,
  updateAttendance,
} = formSlice.actions;
export default formSlice.reducer;
