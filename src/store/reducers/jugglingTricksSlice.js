import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import threeBallTricks from "../../assets/json/jugglingTricks/ThreeBallTricks.json";
import fourBallTricks from "../../assets/json/jugglingTricks/FourBallTricks.json";
import fiveBallTricks from "../../assets/json/jugglingTricks/FiveBallTricks.json";
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
    threeBall: null || threeBallTricks,
    fourBall: null || fourBallTricks,
    fiveBall: null || fiveBallTricks,
  },
  reducers: {
    addTrick(state, action) {
      switch (action.payload.balls) {
        case "3":
          state.threeBall = [...state.threeBall, action.payload];
          break;
        case "4":
          state.fourBall = [...state.fourBall, action.payload];
          break;
        case "5":
          state.fiveBall = [...state.fiveBall, action.payload];
          break;
        default:
          return "";
      }
    },
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

export const { addTrick } = jugglingTricksSlice.actions;

export default jugglingTricksSlice.reducer;
