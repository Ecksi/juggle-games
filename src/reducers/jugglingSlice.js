import { createSlice } from "@reduxjs/toolkit";
import JugglingTricks from "../assets/JugglingTricks/JugglingTricks.json";

export const jugglingSlice = createSlice({
  name: "juggling",
  initialState: JugglingTricks,
});

export default jugglingSlice.reducer;
