import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  date?: string;
  description?: string;
  result?: string;
  commands?: string;
  attendance?: number | undefined;
};

const initialState: FormState = {
  date: "",
  description: "",
  result: "",
  commands: "",
  attendance: 0,
};

const formSlice = createSlice({
  name: "form",
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

export const { actions: formActions } = formSlice;
export default formSlice.reducer;
