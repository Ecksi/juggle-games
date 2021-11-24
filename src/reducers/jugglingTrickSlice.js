import { createSlice } from "@reduxjs/toolkit";
import threeBallTricksJson from "../assets/JugglingTricks/ThreeBallTricks.json"
import fourBallTricksJson from "../assets/JugglingTricks/FourBallTricks.json"

export const jugglingTricksSlice = createSlice({
  name: "jugglingTricks",
  initialState: {
      threeBall: threeBallTricksJson,
      fourBall: fourBallTricksJson,
  },
  reducers: {
    addThreeBallTrick(state, action) {
        state.threeBall.push(action.payload)
    },
    addFourBallTrick(state, action) {
        state.fourBall.push(action.payload)
    },
  }
});

export const {addThreeBallTrick, addFourBallTrick} = jugglingTricksSlice.actions

export default jugglingTricksSlice.reducer;
