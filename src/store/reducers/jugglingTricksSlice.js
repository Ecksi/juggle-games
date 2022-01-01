import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
// import threeBallTricks from "../../assets/json/jugglingTricks/ThreeBallTricks.json";
// import fourBallTricks from "../../assets/json/jugglingTricks/FourBallTricks.json";
// import fiveBallTricks from "../../assets/json/jugglingTricks/FiveBallTricks.json";
import axios from "axios";

export const fetchJugglingTricksData = createAsyncThunk(
  "jugglingTricks/fetchJugglingTricksData",
  async () => {
    const { data } = await axios.get(`${API_URL}/tricks`);
    return data;
  }
);

export const jugglingTricksSlice = createSlice({
  name: "jugglingTricks",
  // future state - load from db first - fall back to default trick set
  initialState: {
    loading: null,
    threeBall: null,
    fourBall: null,
    fiveBall: null,
  },
  reducers: {
    addThreeBallTrick(state, action) {
      state.threeBall.push(action.payload);
    },
    addFourBallTrick(state, action) {
      state.fourBall.push(action.payload);
    },
    addTrick(state, action) {
      console.log("here is your trick");
    },
    // junk for now, but adding tricks should boil down to 1 function instead of 3 functions doing the same thing
    // addTrick(state, action) {
    //   switch (trickType) {
    //     case "threeBall":
    //       state.threeBall.push(action.payload);
    //     case "fourBall":
    //       state.fourBall.push(action.payload);
    //     case "fiveball":
    //       state.fiveBall.push(action.payload);
    //     default:
    //         return state;
    //   }
    // },
  },
  extraReducers: {
    [fetchJugglingTricksData.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchJugglingTricksData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.threeBall = payload.threeBallTricks;
      state.fourBall = payload.fourBallTricks;
      state.fiveBall = payload.fiveBallTricks;
    },
    [fetchJugglingTricksData.rejected](state, { payload }) {
      state.loading = HTTP_STATUS.REJECT;
      //could add static here
    },
  },
});

export const { addTrick, addThreeBallTrick, addFourBallTrick } =
  jugglingTricksSlice.actions;

export default jugglingTricksSlice.reducer;
