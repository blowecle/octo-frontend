import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storySlice = createSlice({
  name: "storyData",
  initialState: {
    story: [],
    status: "idle",
    error: null,
    filter: null,
  },
  reducers: {
    getStoryList: (state, action) => {
      state.storyData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
  },
});

export default storySlice;

export const storySliceReducer = storySlice.reducer;

export const { getStory, setErrorMsg } =
  storySlice.actions;

export const fetchStory = createAsyncThunk(
  "story/fetchStory",
  async () => {
    try {
      const { data } = await axios.get(
        "https://octopus-house.herokuapp.com/api/story"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);