import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: [
        {
            "FavouriteListID": 2,
            "VideoDescription": "video description",
            "VideoTitle": "dummy1",
            "VideoUrl": "https://www.youtube.com/watch?v=hu-q2zYwEYs"
        }
    ],
};

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        addVideo(state, action) {
            const newVideo = {
                ...action.payload,
                comments: [],
            };
            state.videos.push(newVideo);
        },
    },
});

export const videosActions = videosSlice.actions;

export default videosSlice.reducer;